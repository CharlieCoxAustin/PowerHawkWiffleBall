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
    baseRunnerQueue;

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
        this.baseRunnerQueue = [];
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
                let fielderY = this.fielderManager.fielderArray[i].y + 115;
                let xDistance = fielderX - (this.x + 20);
                let yDistance = fielderY - (this.y + 15);
                if((xDistance <= 15 && xDistance >= -15) && (yDistance <= 15 && yDistance >= -15))
                {
                    this.ballOnBase = true;
                    return;
                }
                else
                {
                    this.ballOnBase = false;
                }
            
            }
        }
        this.ballOnBase = false;
    }
}