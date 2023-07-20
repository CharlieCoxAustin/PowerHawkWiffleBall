class FielderFactory
{
    fielderArray;

    constructor()
    {
        this.fielderArray = [];
    }

    addFielder(newFielder)
    {
        this.fielderArray.push(newFielder);
    }

    executeMoves()
    {
        for(let i = 0; i < this.fielderArray.length; ++i)
        {
            this.fielderArray[i].executeMoves();
        }
    }

    draw()
    {
        for(let i = 0; i < this.fielderArray.length; ++i)
        {
            this.fielderArray[i].draw();
        }
    }

    whoClosest(ballX, ballY)
    {
        let closestIndex = 0;
        let closestDistance = Number.MAX_SAFE_INTEGER;
        for(let i = 0; i < this.fielderArray.length; ++i)
        {
            let fielderX = this.fielderArray[i].x;
            let fielderY = this.fielderArray[i].y;
            let distance = ((fielderX - ballX) / (fielderY - ballY));
            if(distance < 0)
            {
                distance *= -1;
            }
            if(distance < closestDistance)
            {
                closestDistance = distance;
                closestIndex = i;
            }
        }
        for(let i = 0; i < this.fielderArray.length; ++i)
        {
            this.fielderArray[i].closest = false;
        }
        this.fielderArray[closestIndex].closest = true;   
    }

    runToBase()
    {
        for(let i = 0; i < this.fielderArray.length; ++i)
        {
            this.fielderArray[i].runToBase();
        }
    }
}