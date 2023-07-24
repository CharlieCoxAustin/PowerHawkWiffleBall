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
    out;
    scored;
    scoredImage;
    outImage;
    forceOut;

    constructor(xVal, yVal, widthVal, heightVal, currentBase, baseManagerVal, pictureVal)
    {
        this.x = xVal;
        this.y = yVal;
        this.width = widthVal;
        this.height = heightVal;
        this.picture = new Image();
        this.picture.src = pictureVal;
        this.baseManager = baseManagerVal;
        this.facingRight = true;
        this.base = currentBase;
        this.yVelocity = 0;
        this.xVelocity = 0;
        this.spriteFrame = 1;
        this.frameCounter = 0;
        this.onBase = false;
        this.shadow = new Image();
        this.shadow.src="ballShadow-01.png";
        this.scoredImage = new Image();
        this.scoredImage.src ="scored-01.png";
        this.outImage = new Image();
        this.outImage.src = 'out-01.png';
        this.speed = 3;
        this.forceOut = false;
        this.out = false;
        this.scored = false;
        window.addEventListener('click', this.determine.bind(this));
        
        

    }

    checkIfOnBase()
    {
        // this isn't working because it's being done by every base!!!!! This will have to change.
        //Make it so that if this.base == -1, then the runner only checks if he's made it to first.
        //Otherwise, make it so that they check if they're on either of the two bases around them.

        if(this.base == -1)
        {
            let xDistance = (this.x + 50) - this.baseManager.baseArray[0].x;
            let yDistance = (this.y + 100) - this.baseManager.baseArray[0].y;
            
            if(xDistance < 15 && xDistance > -15 && yDistance < 15 && yDistance > -15)
            {   
                if(this.onBase == false) //if he's within the box and HASN'T been marked as on base, he will be.
                {
                    this.forceOut = false;
                    this.base++;
                    this.onBase = true;
                    this.baseManager.baseArray[this.base].baseRunnerQueue.push(this);
                    this.xVelocity = 0;
                    this.yVelocity = 0;
                }
            }
        }
        else if(this.base >= 0 && this.base < 3) //1st base has no base behind it.
        //Here have it check the base in front AND behind the runner. currently only checking in front and then 2 bases in front.
        {
            let xDistance = (this.x + 50) - this.baseManager.baseArray[this.base].x;
            let yDistance = (this.y + 100) - this.baseManager.baseArray[this.base].y;
            let nextXDistance = (this.x + 50) - this.baseManager.baseArray[this.base + 1].x;
            let nextYDistance = (this.y + 100) - this.baseManager.baseArray[this.base + 1].y;
            
            if(xDistance <= 15 && xDistance >= -15 && yDistance <= 15 && yDistance >= -15)
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
                    this.forceOut = false;
                }
            }
            else
            {
                this.onBase = false;
            }
        }
        else if(this.base == 3)
        {
            this.scored = true;
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
            if(!this.out)
            {
                this.standStillLeft();
            }
            else
            {
                this.standStillRight();
            }
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
            if(!this.out)
            {
                this.runRight();
            }
            else
            {
                this.runLeft();
            }
        }
        else if(this.base == 4)
        {
            if(!this.out)
            {
                this.runRight();
            }
            else if(this.out)
            {
                this.runLeft();
            }
        }

        if(this.scored == true)
        {
            c.drawImage(this.scoredImage, this.x + 25, this.y - 85, this.width - 50, this.height - 25);
        }

        if(this.out == true)
        {
            c.drawImage(this.outImage, this.x + 25, this.y - 85, this.width - 50, this.height - 25);
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
            
            let xDistance = (this.x + 50) - (this.baseManager.baseArray[baseNum].x + 20);
            let yDistance = (this.y + 115) - (this.baseManager.baseArray[baseNum].y + 15);
            let theta = Math.atan2(yDistance, xDistance);
            let movementX = this.speed * Math.cos(theta);
            let movementY = this.speed * Math.sin(theta);
            this.xVelocity = movementX;
            this.yVelocity = movementY;
            
        }
        else
        {
            let xDistance;
            let yDistance;
            if(this.scored == true)
            {
                xDistance = (this.x + 50) - 1300;
                yDistance = (this.y + 100) - 700;
            }
            else if(this.out == true)
            {
                xDistance = (this.x + 50) - 300;
                yDistance = (this.y + 100) - 700;
            }
                let theta = Math.atan2(yDistance, xDistance);
                let movementX = this.speed * Math.cos(theta);
                let movementY = this.speed * Math.sin(theta);
                this.xVelocity = movementX;
                this.yVelocity = movementY;
                this.onBase = false;
            if(xDistance < 15 && xDistance > -15)
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
        if(this.base == -1)
        {
            this.determine();
        }
        this.x -= this.xVelocity;
        this.y -= this.yVelocity;
        
        this.checkIfOnBase();
        this.checkIfOut();
        
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
        c.fillStyle = 'black';
        c.fillRect(this.x + 50, this.y + 115, 15, 15);
    }

    standStillRight()
    {
        c.drawImage(this.shadow, this.x + 25, this.y + 85, this.width - 50, this.height - 25);
        c.drawImage(this.picture,  0, 0, 298, 225, this.x, this.y, this.width, this.height);
    }

    checkIfOut()
    {
        //the runner is headed to a base. If the base has a player on it, and that player has the ball, AND there's a force out at that base, then the runner is out.
        //how do we check if the base we're headed to has a player on it? How do we access the base?
        //Answer: We know what base we're headed to based on the players 'this.base' attribute. We're going to not worry about force out right now, and make it so that,
        //if a player is on the base where we're headed and that player has the ball, the runner is out. Good news! this.baseManager is part of this object, so we have that data!
        if(this.out == false)
        {
            if(this.base < 3)
            {
                if(this.baseManager.baseArray[this.base + 1].ballOnBase == true  && this.forceOut == true)
                {
                    this.out = true;
                    this.base = 4;
                }
            }
        }

        if(this.scored == true || this.out == true)
        {
            //make them run to the outside of the 1st base line.
            this.calculateRunLine(5);
        }
    }

    checkForForce(baseRunnerArray, j)
    {
        //the logic for this is really bonkers. I'll try to add comments to explain what is happenin'.
        switch(this.base)
        {
            case -1:
            if(!this.onBase) //if you're otw to first after batting and are not on base, force is in effect.
            {
                this.forceOut = true;
                
            }
            else //if you get to first base, force is no longer in effect.
            {
                this.forceOut = false;
            }
            break;
            case 0:
            for(let i = 0; i < baseRunnerArray.length; ++i)
            {
                if(i != j)
                {
                    if(baseRunnerArray[i].base == -1) //runner started on first and now a new runner(the batter) is headed to first
                    {
                        this.forceOut = true;
                        return;
                    }
                    else if(baseRunnerArray[i].base == 0) //there's a runner on first who isn't you, i.e. the batter. this uses a queue to only call give the first runner a force
                    {
                        let size = this.baseManager.baseArray[0].baseRunnerQueue.length;
                        if(size == 2)
                        {
                            this.forceOut = false;
                            this.baseManager.baseArray[0].baseRunnerQueue[0].forceOut = true;
                            this.baseManager.baseArray[0].baseRunnerQueue.shift();
                              
                        }
                        return; 
                    }
                    else //there is neither a runner headed to first nor on first. this will happen if the batter is thrown out at first BEFORE the runner otw to 2 is thrown out.
                    {
                        this.forceOut = false; //this is messing it up
                    }
                }
            }
            break;
            case 1:
                for(let i = 0; i < baseRunnerArray.length; ++i) //runner is on 2nd headed to 3rd. if force exists for runner behind them, force is in effect.
                {
                    if(baseRunnerArray[i].base == 0 && baseRunnerArray[i].forceOut == true)
                    {
                        this.forceOut = true;
                        break;
                    }
                    else
                    {
                        this.forceOut = false;
                    }
                    
                } 
                break;
            case 2:
                for(let i = 0; i < baseRunnerArray.length; ++i) //runner is on 3rd headed to home. if force exists for runner behind them, force is in effect.
                {
                    if(baseRunnerArray[i].base == 1 && baseRunnerArray[i].forceOut == true)
                    {
                        this.forceOut = true;
                        break;
                    }
                    else
                    {
                        this.forceOut = false;
                    }
                    
                }
                break;
            case 3:
                break;
            case 4:
                break;
        }
    }

    checkForTag(fielderArray)
    {
        for(let i = 0; i < fielderArray.length; ++i)
        {
            let xDistance = (this.x + 50) - (fielderArray[i].x + 50)
            let yDistance = (this.y + 115) - (fielderArray[i].y + 115)
            if(xDistance < 15 && xDistance > -15 && yDistance < 15 && yDistance > -15)
            {
                if(fielderArray[i].holdingBall && !this.onBase && !this.scored)
                {
                    this.out = true;
                    this.base = 4;
                }
            }
        }
    }

    checkForFlyOut(theBall)
    {
        //if the ball is in someone's hand and it hasn't bounced yet, the runner who's base is -1 is out.
        if(theBall.inHandBool && !theBall.bounced)
        {
            if(this.base == -1)
            {
                this.out = true;
                this.base = 4;
            }
        }
    }

}