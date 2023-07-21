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

    whoClosest(ballX, ballY) //THIS IS FINDING THE WRONG THING LOL
    {
        let closestIndex = 0;
        let closestDistance = Number.MAX_SAFE_INTEGER;
        for(let i = 0; i < this.fielderArray.length; ++i)
        {
            let fielderX = this.fielderArray[i].x + 50;
            let fielderY = this.fielderArray[i].y + 115;
            let theXValue = (fielderX - ballX) * (fielderX - ballX);
            let theYValue = (fielderY - ballY) * (fielderY - ballY);
            let distance = Math.sqrt(theXValue + theYValue);
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