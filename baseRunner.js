class BaseRunner
{
    x;
    y;
    width;
    height;
    picture;
    facingRight;
    speed;
    base;
    yVelocity;
    xVelocity;
    spriteFrame;
    frameCounter;
    shadow;
    onBase;
    baseManager;
    basesRun;

    constructor(xVal, yVal, widthVal, heightVal, baseManagerVal, pictureVal)
    {
        this.x = xVal;
        this.y = yVal;
        this.width = widthVal;
        this.height = heightVal;
        this.picture = new Image();
        this.picture.src = pictureVal;
        this.baseManager = baseManagerVal;
        this.facingRight = true;
        this.base = -1;
        this.yVelocity = 0;
        this.xVelocity = 0;
        this.spriteFrame = 1;
        this.frameCounter = 0;
        this.onBase = false;
        this.shadow = new Image();
        this.shadow.src="ballShadow-01.png";
        this.speed = 3;
        window.addEventListener('click', this.determine.bind(this));
        

    }

    checkIfOnBase()
    {
        // this isn't working because it's being done by every base!!!!! This will have to change.
        //Make it so that if this.base == -1, then the runner only checks if he's made it to first.
        //Otherwise, make it so that they check if they're on either of the two bases around them.

        if(this.base == -1)
        {
            
            let nextBase = this.base + 1;
            let xDistance = (this.x + 50) - this.baseManager.baseArray[nextBase].x;
            let yDistance = (this.y + 100) - this.baseManager.baseArray[nextBase].y;
            
            if(xDistance < 15 && xDistance > -15 && yDistance < 15 && yDistance > -15)
            {   
                if(this.onBase == false) //if he's within the box and HASN'T been marked as on base, he will be.
                {
                    this.base++;
                    this.onBase = true;
                    this.xVelocity = 0;
                    this.yVelocity = 0;
                }
            }
        }
        else if(this.base >= 0 && this.base < 3) //here have it check the base in front AND behind the runner.
        {
            let xDistance = (this.x + 50) - this.baseManager.baseArray[this.base].x;
            let yDistance = (this.y + 100) - this.baseManager.baseArray[this.base].y;
            let nextXDistance = (this.x + 50) - this.baseManager.baseArray[this.base + 1].x;
            let nextYDistance = (this.y + 100) - this.baseManager.baseArray[this.base + 1].y;
            
            if(xDistance < 15 && xDistance > -15 && yDistance < 15 && yDistance > -15)
            {   
                if(this.onBase == false) //if he's within the box and HASN'T been marked as on base, he will be.
                {
                    this.base++;
                    this.onBase = true;
                    this.xVelocity = 0;
                    this.yVelocity = 0;
                }
            }
            else if(nextXDistance < 15 && nextXDistance > -15 && nextYDistance < 15 && nextYDistance > -15)
            {
                if(this.onBase == false)
                {
                    this.base++;
                    this.onBase = true;
                    this.xVelocity = 0;
                    this.yVelocity = 0;
                }
            }
            else
            {
                this.onBase = false;
            }
        }
        else if(this.base == 3)
        {

        }
    }

    draw()
    {
        ++this.frameCounter;
        if(this.frameCounter >= 3)
        {
            ++this.spriteFrame;
            this.frameCounter = 0;
        }
        if(this.spriteFrame >= 8)
        {
            this.spriteFrame = 0;
        }

        if(this.onBase == true)
        {
            this.standStillLeft();
        }
        else if(this.base == -1)
        {
            this.runRight();
        }
        else if(this.base == 0)
        {
            this.runLeft();
        }
        else if(this.base == 1)
        {
            this.runLeft();
        }
        else if(this.base == 2)
        {
            this.runRight();
        }
        else if(this.base == 3)
        {
            this.runRight();
        }
        else if(this.base == 4)
        {
            this.runRight();
        }

    }

    determine()
    {
        
        switch(this.base)
        {
            case -1:
                this.runToBase(-1);
                break;
            case 0:
                this.runToBase(0);
                break;
            case 1:
                this.runToBase(1);
                break;
            case 2:
                this.runToBase(2);
                break;
            case 3:
                this.runToBase(3);
                break;
            case 4:
                this.runToBase(4);
                break;
        }
    }

    calculateRunLine(baseNum)
    {
        
        if(baseNum <= 3)
        {
            
            let xDistance = (this.x + 50) - (this.baseManager.baseArray[baseNum].x);
            
            let yDistance = (this.y + 100) - this.baseManager.baseArray[baseNum].y;
            let theta = Math.atan2(yDistance, xDistance);
            let movementX = this.speed * Math.cos(theta);
            let movementY = this.speed * Math.sin(theta);
            this.xVelocity = movementX;
            this.yVelocity = movementY;
            
        }
        else
        {
            let xDistance = (this.x + 50) - 1300;
            let yDistance = (this.y + 100) - 800;
            if(xDistance > 10 || xDistance < -10)
            {
                let theta = Math.atan2(yDistance, xDistance);
                let movementX = this.speed * Math.cos(theta);
                let movementY = this.speed * Math.sin(theta);
                this.xVelocity = movementX;
                this.yVelocity = movementY;
                this.onBase = false;
            }
            else
            {
                this.onBase = true;
                this.xVelocity = 0;
                this.yVelocity = 0;
            }
        }
    }

    runToBase(baseNum)
    {
        switch(baseNum)
        {
            case -1:
                this.calculateRunLine(0);
                break;
            case 0:
                this.calculateRunLine(1);
                break;
            case 1:
                this.calculateRunLine(2);
                break;
            case 2:
                this.calculateRunLine(3);
                break;
            case 3:
                this.calculateRunLine(4);
                break;
            case 4:
                this.calculateRunLine(5);
                break;
        }

    }

    executeMoves()
    {
        this.x -= this.xVelocity;
        this.y -= this.yVelocity;

        this.checkIfOnBase();
    }

    runRight()
    {
        if(this.spriteFrame == 0)
            {
                c.drawImage(this.shadow, this.x + 25, this.y + 85, this.width - 50, this.height - 25);
                c.drawImage(this.picture,  0, 0, 298, 225, this.x, this.y + this.yVelocity, this.width, this.height);
            }
            else if(this.spriteFrame == 1)
            {  //237!!!!!! WINNER
                c.drawImage(this.shadow, this.x + 25, this.y + 85, this.width - 50, this.height - 25);
                c.drawImage(this.picture,  299, 0,  298, 225, this.x, this.y + this.yVelocity - 5, this.width, this.height);
            }
            else if(this.spriteFrame == 2)
            { //520!!!!! WINNER
                c.drawImage(this.shadow, this.x + 25, this.y + 85, this.width - 50, this.height - 25);
                c.drawImage(this.picture,  597, 0, 298, 225, this.x, this.y + this.yVelocity - 10, this.width, this.height);
            }
            else if(this.spriteFrame == 3)
            {  //770!!!!! WINNER
                c.drawImage(this.shadow, this.x + 25, this.y + 85, this.width - 50, this.height - 25);
                c.drawImage(this.picture,  299, 0,  298, 225, this.x, this.y + this.yVelocity - 5, this.width, this.height);
            }
            else if(this.spriteFrame == 4)
            {
                c.drawImage(this.shadow, this.x + 25, this.y + 85, this.width - 50, this.height - 25);
                c.drawImage(this.picture,  0, 0,  298, 225, this.x, this.y + this.yVelocity, this.width, this.height);
            }
            else if(this.spriteFrame == 5)
            {
                c.drawImage(this.shadow, this.x + 25, this.y + 85, this.width - 50, this.height - 25);
                c.drawImage(this.picture,  895, 0,  298, 225, this.x, this.y + this.yVelocity - 5, this.width, this.height);
            }
            else if(this.spriteFrame == 6)
            {
                c.drawImage(this.shadow, this.x + 25, this.y + 85, this.width - 50, this.height - 25);
                c.drawImage(this.picture,  1193, 0,  298, 225, this.x, this.y + this.yVelocity - 10, this.width, this.height);
            }
            else if(this.spriteFrame == 7)
            {
                c.drawImage(this.shadow, this.x + 25, this.y + 85, this.width - 50, this.height - 25);
                c.drawImage(this.picture,  895, 0,  298, 225, this.x, this.y + this.yVelocity - 5, this.width, this.height);
            }
    }

    runLeft()  //currently the same as run right
    {
        if(this.spriteFrame == 0)
            {
                c.drawImage(this.shadow, this.x + 25, this.y + 85, this.width - 50, this.height - 25);
                c.drawImage(this.picture,  0, 299, 298, 225, this.x, this.y + this.yVelocity, this.width, this.height);
            }
            else if(this.spriteFrame == 1)
            {  //237!!!!!! WINNER
                c.drawImage(this.shadow, this.x + 25, this.y + 85, this.width - 50, this.height - 25);
                c.drawImage(this.picture,  299, 299,  298, 225, this.x, this.y + this.yVelocity - 5, this.width, this.height);
            }
            else if(this.spriteFrame == 2)
            { //520!!!!! WINNER
                c.drawImage(this.shadow, this.x + 25, this.y + 85, this.width - 50, this.height - 25);
                c.drawImage(this.picture,  597, 299, 298, 225, this.x, this.y + this.yVelocity - 10, this.width, this.height);
            }
            else if(this.spriteFrame == 3)
            {  //770!!!!! WINNER
                c.drawImage(this.shadow, this.x + 25, this.y + 85, this.width - 50, this.height - 25);
                c.drawImage(this.picture,  299, 299,  298, 225, this.x, this.y + this.yVelocity - 5, this.width, this.height);
            }
            else if(this.spriteFrame == 4)
            {
                c.drawImage(this.shadow, this.x + 25, this.y + 85, this.width - 50, this.height - 25);
                c.drawImage(this.picture,  0, 299,  298, 225, this.x, this.y + this.yVelocity, this.width, this.height);
            }
            else if(this.spriteFrame == 5)
            {
                c.drawImage(this.shadow, this.x + 25, this.y + 85, this.width - 50, this.height - 25);
                c.drawImage(this.picture,  895, 299,  298, 225, this.x, this.y + this.yVelocity - 5, this.width, this.height);
            }
            else if(this.spriteFrame == 6)
            {
                c.drawImage(this.shadow, this.x + 25, this.y + 85, this.width - 50, this.height - 25);
                c.drawImage(this.picture,  1193, 299,  298, 225, this.x, this.y + this.yVelocity - 10, this.width, this.height);
            }
            else if(this.spriteFrame == 7)
            {
                c.drawImage(this.shadow, this.x + 25, this.y + 85, this.width - 50, this.height - 25);
                c.drawImage(this.picture,  895, 299,  298, 225, this.x, this.y + this.yVelocity - 5, this.width, this.height);
            }
    }

    standStillLeft()
    {
        c.drawImage(this.shadow, this.x + 25, this.y + 85, this.width - 50, this.height - 25);
        c.drawImage(this.picture,  0, 299, 298, 225, this.x, this.y, this.width, this.height);
    }

}