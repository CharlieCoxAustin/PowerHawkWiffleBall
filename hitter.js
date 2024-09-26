class Hitter 
{
    x;
    y;
    width;
    height;
    picture;
    hitPower;
    theBall;

    constructor(xVal ,yVal, widthVal, heightVal, theBallVal, pictureVal)
    {
        this.x = xVal;
        this.y = yVal;
        this.width = widthVal;
        this.height = heightVal;
        this.pitcure = new Image();
        this.picture.src = pictureVal;
        this.hitPower = 5;
        this.theBall = theBallVal;
        window.addEventListener('click', this.swing.bind(this));
    }


    swing()
    {
        this.theBall.xVelocity = Math.random() * 8;
        this.theBall.yVelocity = Math.random() * -8;
        this.theBall.ZVelocity = 5;
    }
}