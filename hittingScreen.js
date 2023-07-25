class HittingScreen
{
    x;
    y;
    picture;
    width;
    height;
    theBall;

    constructor(xVal, yVal, widthVal, heightVal, theBallVal, pictureVal)
    {
        this.x = xVal;
        this.y = yVal;
        this.width = widthVal;
        this.height = heightVal;
        this.picture = new Image();
        this.picture.src = pictureVal;
        this.theBall = theBallVal;
        window.addEventListener('click', this.hit.bind(this));
    }

    draw()
    {
        //drawImage(image, dx, dy, dWidth, dHeight)
        c.drawImage(this.picture, this.x, this.y, this.width, this.height);
    }

    hit()
    {
        if(hitting)
        {
            console.log('setting hitting to false');
            hitting = false;
            this.theBall.x = 850;
            this.theBall.y = 650;
            this.theBall.z = 80;
            this.theBall.xVelocity = 7;
            this.theBall.yVelocity = -11;
            this.theBall.zVelocity = 5;
            this.theBall.inHandBool = false;
        }
    }
}