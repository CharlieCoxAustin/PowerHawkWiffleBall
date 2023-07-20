class BaseFactory
{
    baseArray;

    constructor()
    {
        this.baseArray = [];
    }

    addBase(newBase)
    {
        this.baseArray.push(newBase);
    }

    draw()
    {
        for(let i = 0; i < 4; ++i)
        {
            this.baseArray[i].draw();
        }
    }

    printX()
    {
        for(let i = 0; i < 4; ++i)
        {
            console.log('printX, i = ' + i + ': ' + this.baseArray[i].x);
        }
    }
}