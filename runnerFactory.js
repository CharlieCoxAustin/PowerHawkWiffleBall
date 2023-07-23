class RunnerFactory
{
    runnerArray;

    constructor()
    {
        this.runnerArray = [];
    }

    addRunner(newRunner)
    {
        this.runnerArray.push(newRunner);
    }

    executeMoves()
    {
        for(let i = 0; i < this.runnerArray.length; ++i)
        {
            this.runnerArray[i].executeMoves();
        }
    }

    draw()
    {
        for(let i = 0; i < this.runnerArray.length; ++i)
        {
            this.runnerArray[i].draw();
        }
    }

    checkForForce()
    {
        for(let i = 0; i < this.runnerArray.length; ++i)
        {
            
            this.runnerArray[i].checkForForce(this.runnerArray, i);
            //console.log(i + ' forceOut: ' + this.runnerArray[i].forceOut)
        }
    }

    checkForTag(fielderArray)
    {
        for(let i = 0; i < this.runnerArray.length; ++i)
        {
            
            this.runnerArray[i].checkForTag(fielderArray);
        }
    }

    checkForFlyOut(theBall)
    {
        for(let i = 0; i < this.runnerArray.length; ++i)
        {
            
            this.runnerArray[i].checkForFlyOut(theBall);
        }
    }
}