class Base
{
    x;
    y;
    width;
    height;
    picture;
    ballOnBase;
    fielderManager;
    force;
    forceThisPlay
    runnerFactory;

    constructor(xVal, yVal, widthVal, heightVal, fielderManagerVal, runnerManager, picture)
    {
        this.x = xVal;
        this.y = yVal;
        this.width = widthVal;
        this.height = heightVal;
        this.picture = new Image();
        this.picture.src = picture;
        this.ballOnBase = false;
        this.force = false;
        this.forceThisPlay = false;
        this.fielderManager = fielderManagerVal;
        this.runnerFactory = runnerManager;
    }

    draw()
    {
        c.drawImage(this.picture, this.x, this.y, this.width, this.height);
        c.fillStyle = 'red';
        c.fillRect(this.x + 20, this.y + 15, 15, 15);
    }

    checkForBall()
    {
        
        for(let i = 0; i < this.fielderManager.fielderArray.length; ++i)
        {
            if(this.fielderManager.fielderArray[i].holdingBall)
            {
                let fielderX = this.fielderManager.fielderArray[i].x + 50;
                let fielderY = this.fielderManager.fielderArray[i].y + 100;
                let xDistance = this.x - fielderX;
                let yDistance = this.y - fielderY;
                if((xDistance <= 15 && xDistance >= -15) && (yDistance <= 15 && yDistance >= -15))
                {
                    this.ballOnBase = true;
                    return;
                }
            
            }
        }
        this.ballOnBase = false;
    }

    //the evidence is mounting that the player and not the base should decide if there is a force on them or not. This way, the base won't inadvertently call
    //players out when peculiar scenarios occur, like the runner gets to first before the other runner gets to second. If the force is confined to the player it
    //applies to, it can be limited to that player.

    /*
    checkForForce(baseIndex)
    {
        if(this.forceThisPlay == true)
        {
            this.force = false;
            return;
        }
        
        if(baseIndex == 0) //first base always has a force
        {
            let batterApproaching = false;
            for(let i = 0; i < this.runnerFactory.runnerArray.length; ++i)
            {
                if(this.runnerFactory.runnerArray[i].base == -1)
                {
                    batterApproaching = true;
                }
            }
            if(batterApproaching)
            {
                this.force = true;
            }
            else
            {
                this.force = false;
            }
        }
        //if there's a runner on first, and a runner headed to first, there's a force at 2.
        else if(baseIndex == 1)
        {
            this.checkSecondForForce();
        }
        //if there's a runner on second, and first, and there's a runner headed to first, there's a force at 3.
        //if there's a runner on third, second, and first, and a runner headed to first, there's a force at 4.
        else if(baseIndex == 2)
        {
            this.checkThirdForForce();
        }

        console.log('force at ' + baseIndex + '? ' + this.force);
    }

    checkSecondForForce()
    {   
        let runnerHeadedToFirst = false;
        let runnerHeadedToSecond = false;
        let runnerOnFirst = false;
        for(let i = 0; i < this.runnerFactory.runnerArray.length; ++i)
        {
            if(this.runnerFactory.runnerArray[i].base == -1)
            {
                runnerHeadedToFirst = true;
            }
            else if(this.runnerFactory.runnerArray[i].base == 0)
            {
                runnerHeadedToSecond = true;
                runnerOnFirst = true;
            }
        }

        if((runnerHeadedToFirst || runnerOnFirst) && runnerHeadedToSecond)
        {
            this.force = true;
        }
        else
        {
            this.force = false;
        }
    }

    checkThirdForForce()
    {
        let runnerHeadedToFirst = false;
        let runnerHeadedToSecond = false;
        let runnerHeadedToThird = false;
        for(let i = 0; i < this.runnerFactory.runnerArray.length; ++i)
        {
            if(this.runnerFactory.runnerArray[i].base == -1)
            {
                runnerHeadedToFirst = true;
            }
            else if(this.runnerFactory.runnerArray[i].base == 0)
            {
                runnerHeadedToSecond = true;
            }
            else if(this.runnerFactory.runnerArray[i].base == 1)
            {
                runnerHeadedToThird = true;
            }
        }

        if(runnerHeadedToFirst && runnerHeadedToSecond && runnerHeadedToThird)
        {
            this.force = true;
        }
        else
        {
            this.force = false;
        }
    }
    */
}