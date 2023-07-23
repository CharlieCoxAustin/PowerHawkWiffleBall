class Fielder extends BaseRunner
{
    x;
    y;
    width;
    height;
    picture;
    facingRight;
    base;
    yVelocity;
    xVelocity;
    spriteFrame;
    frameCounter;
    shadow;
    speed;
    throwPower;
    holdingBall;
    fielding;
    theBall;
    movingToMouse;
    mouseX;
    mouseY;
    closest;
    fielderFactory;
    baseManager;

    constructor(xVal, yVal, widthVal, heightVal, aBall, baseManagerVal, fielderFactoryVal, pictureVal)
    {
        super(xVal, yVal, widthVal, heightVal, 0, baseManagerVal, pictureVal);
        this.x = xVal;
        this.y = yVal;
        this.width = widthVal;
        this.height = heightVal;
        this.picture = new Image();
        this.picture.src = pictureVal;
        this.facingRight = true;
        this.base = 0;
        this.yVelocity = 0;
        this.xVelocity = 0;
        this.spriteFrame = 1;
        this.frameCounter = 0;
        this.shadow = new Image();
        this.shadow.src="ballShadow-01.png";
        this.speed = 3;
        this.throwPower = 15;
        this.holdingBall = false;
        this.fielding = true;
        this.theBall = aBall;
        this.movingToMouse = false;
        this.closest = false;
        this.fielderFactory = fielderFactoryVal;
        this.baseManager = baseManagerVal;
        window.addEventListener("click", (event) => 
            {this.clickHandler(event.clientX, event.clientY)});

    }

    determine()
    {
        this.xVelocity = 0;
        this.yVelocity = 0;
    }

    clickHandler(mouseX, mouseY)
    {
        this.mouseX = mouseX; 
        this.mouseY = mouseY;
        if(this.holdingBall == true)
        {
            //console.log('holding ball in click handler');
            for(let i = 0; i < this.fielderFactory.fielderArray.length; ++i) //figuring out if the click was close enough to a player to throw it.
            {
                //console.log('holding ball in click handler for loop');
                if(this.fielderFactory.fielderArray[i] != this)
                {
                    //console.log('holding ball checking for fielder to throw to.');
                    let fielderX = this.fielderFactory.fielderArray[i].x  + 50;
                    let fielderY = this.fielderFactory.fielderArray[i].y + 115;
                    let xDistance = fielderX - mouseX;
                    let yDistance = fielderY - mouseY;
                    if(xDistance >= -50 && xDistance <= 50 && yDistance >= -50 && yDistance <= 50)
                    {
                        //console.log('throwing');
                        this.throw(fielderX, fielderY);
                        return;
                    }
                }

            }
            for(let i = 0; i < this.baseManager.baseArray.length; ++i)
            {
                //console.log('Holding ball in base for loop');
                let baseX = this.baseManager.baseArray[i].x  + 50;
                let baseY = this.baseManager.baseArray[i].y + 115;
                let xDistance = baseX - mouseX;
                let yDistance = baseY - mouseY;
                
                if(xDistance >= -50 && xDistance <= 50 && yDistance >= -50 && yDistance <= 50)
                    {
                        console.log('calling crl from clickhandler!!!! AAAAAAAAAAHHHHHHHH! base = ' + i);
                        this.calculateRunLine(i);
                        return;
                    }
            }
            this.chaseMouse(mouseX, mouseY); //here, check and see if there is another player close enough to catch the ball, otherwise, the player moves there.
        }
        else
        {
            if(this.closest == true)
            {
                this.chaseMouse(mouseX, mouseY);
            }
        }
    }

    draw()
    {
        ++this.frameCounter;  //this is to make sure the right frame is used and creates the flipbook style motion illusion.
        if(this.frameCounter >= 3)
        {
            ++this.spriteFrame;
            this.frameCounter = 0;
        }
        if(this.spriteFrame >= 8)
        {
            this.spriteFrame = 0;
        }

        if(this.xVelocity == 0)
        {
            this.standStillLeft();
        }
        else if(this.xVelocity > 0.0)
        {
            this.runLeft();
        }
        else if(this.xVelocity < 0.0)
        {
            this.runRight();
        }
        else
        {
            this.standStillLeft();
        }

    }

    chaseMouse(mouseX, mouseY)
    {
        this.movingToMouse = true;
        let xDistance = (this.x + 50) - mouseX;
        let yDistance = (this.y + 115) - mouseY;
        let theta = Math.atan2(yDistance, xDistance);
        let movementX = this.speed * Math.cos(theta);
        let movementY = this.speed * Math.sin(theta);
        this.xVelocity = movementX;
        this.yVelocity = movementY;
    }

    
    chaseBall()
    {
        if(this.fielding == true)
        {
        if(this.theBall.inHandBool == false)
        {
        let xDistance = (this.x + 50) - this.theBall.x;
        let yDistance = (this.y + 75) - this.theBall.y;
        let theta = Math.atan2(yDistance, xDistance);
        let movementX = this.speed * Math.cos(theta);
        let movementY = this.speed * Math.sin(theta);
        this.xVelocity = movementX;
        this.yVelocity = movementY;
        if(xDistance < 2 && xDistance > -2 && yDistance < 2 && yDistance > -2)
        {
            this.xVelocity = 0;
            this.yVelocity = 0;
            if(this.theBall.z <= 5)
            {
                this.theBall.inHandBool = true;
                this.holdingBall = true;
                this.fielding = false;
                this.theBall.xVelocity = 0;
                this.theBall.yVelocity = 0;
            }
        }
        }
        }
        
    }
    

    throw(x, y)
    {   
        if(this.holdingBall == true)
        {
            //document.querySelector('canvas');
            let mouseX = x;
            let mouseY = y;
            let xDistance = (this.x + 50) - mouseX;
            let yDistance = (this.y + 115) - mouseY;
            let theta = Math.atan2(yDistance, xDistance);
            let xChange = this.throwPower * Math.cos(theta);
            let yChange = this.throwPower * Math.sin(theta);
            this.theBall.xVelocity -= xChange;
            this.theBall.yVelocity -= yChange;
            this.theBall.zVelocity += 5;
            this.theBall.inHandBool = false;
            this.holdingBall = false;
            if(mouseX > this.x) //making sure the ball doesn't get trapped inside the player.
            {
                this.theBall.x = this.x + this.width;
            }
            else
            {
                this.theBall.x = this.x;
            }
        }
    }

    executeMoves()
    {
        this.x -= this.xVelocity;
        this.y -= this.yVelocity;

        if(this.movingToMouse == true)
        {
            let xDistance = (this.x + 50) - this.mouseX;
            let yDistance = (this.y + 115) - this.mouseY;
            if(xDistance < 15 && xDistance > -15 && yDistance < 15 && yDistance > -15)
            {
                this.xVelocity = 0;
                this.yVelocity = 0;
                this.movingToMouse = false;
            }
        }
        
        this.pickUpBall();

        if(this.holdingBall) //making sure the ball moves with the moving player.
        {
            this.theBall.x = this.x + 50;
            this.theBall.y = this.y + 75;
        }
    }

    pickUpBall()
    {
        let xDistance = (this.x + 50) - this.theBall.x;
        let yDistance = (this.y + 115) - this.theBall.y;
        if(xDistance < 35 && xDistance > -35 && yDistance < 35 && yDistance > -35)
        {
            this.xVelocity = 0;
            this.yVelocity = 0;
            if(this.theBall.z <= 75)
            {
                this.theBall.inHandBool = true;
                this.holdingBall = true;
                this.fielding = false;
                this.theBall.xVelocity = 0;
                this.theBall.yVelocity = 0;
            }
        }
    }

    calculateRunLine(baseNum)
    {
        let xDistance = (this.x + 50) - (this.baseManager.baseArray[baseNum].x) - 20;    
        let yDistance = (this.y + 115) - (this.baseManager.baseArray[baseNum].y) - 15;
        let theta = Math.atan2(yDistance, xDistance);
        let movementX = this.speed * Math.cos(theta);            
        let movementY = this.speed * Math.sin(theta);
        this.xVelocity = movementX;
        this.yVelocity = movementY;
        console.log('crl xdist, ydist: ' + xDistance + ', ' + yDistance);
        if(xDistance < 15 && xDistance > -15 && yDistance < 15 && yDistance > -15)
        {
            console.log('setting x and y velocities of fielder to 0!!!');
            this.xVelocity = 0;
            this.yVelocity = 0;
            this.onBase = true;
        }
    }

}