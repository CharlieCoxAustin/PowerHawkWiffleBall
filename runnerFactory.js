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
            console.log(i);
            this.runnerArray[i].checkForForce(this.runnerArray);
        }
    }
}