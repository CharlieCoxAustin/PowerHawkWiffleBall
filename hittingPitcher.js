class HittingPitcher 
{
    x;
    y;
    width;
    height;
    picture;
    hitPower;
    theBall;
    throwPower;
    shadow;
    

    constructor(xVal ,yVal, widthVal, heightVal, theBallVal, pictureVal)
    {
        this.x = xVal;
        this.y = yVal;
        this.width = widthVal;
        this.height = heightVal;
        this.picture = new Image();
        this.picture.src = pictureVal;
        this.shadow = new Image();
        this.shadow.src = 'ballShadow-01.png';
        this.throwPower = 5;
        this.theBall = theBallVal;
        
        window.addEventListener('click', this.throw.bind(this));
    }

    throw()
    {
        if(hitting)
        {
            if(!this.theBall.thrown)
            {
                this.theBall.y = this.y;
                this.theBall.yVelocity = 5;
                this.theBall.thrown = true;
            }
            else if(this.theBall.thrown)
            {
                this.theBall.yVelocity *= -1;
            }
        }
    }
    
    draw()
    {
        c.drawImage(this.shadow, this.x + 25, this.y + 85, this.width - 50, this.height - 25);
        c.drawImage(this.picture,  0, 299, 298, 225, this.x, this.y, this.width, this.height);
        c.fillStyle = 'black';
        c.fillRect(this.x + 50, this.y + 115, 15, 15);
    }
}