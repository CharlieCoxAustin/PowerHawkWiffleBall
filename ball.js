class Ball
{
    x;
    y;
    z;
    width;
    height;
    xVelocity;
    yVelocity;
    zVelocity;
    shadow;
    inHandBool;

    constructor(xVal, yVal, zVal, widthVal, heightVal, xVel, yVel, zVel, pictureVal)
    {
        this.x = xVal;
        this.y = yVal;
        this.z = zVal;
        this.width = widthVal;
        this.height = heightVal;
        this.picture = new Image();
        this.picture.src = pictureVal;
        this.xVelocity = xVel;
        this.yVelocity = yVel;
        this.zVelocity = zVel;
        this.inHandBool = false;
        this.shadow = new Image();
        this.shadow.src = "ballShadow-01.png"
        
    }

    draw()
    {
        if(this.inHandBool == false)
        {
            c.drawImage(this.shadow, this.x, this.y + 10, this.width, this.height);
            c.drawImage(this.picture, this.x, this.y - this.z, this.width, this.height);
        }
    }

    executeMoves()
    {
        this.x += this.xVelocity;
        this.y += this.yVelocity;
        this.z += this.zVelocity;
        console.log(this.z);
        this.passiveMove();
        
    }

    passiveMove()
    {
        if(this.xVelocity < 0.0 && this.xVelocity < -1)
        {
            if(this.z > 0)
            {
               this.xVelocity += .05;
            }
            else if(this.z <= 0)
            {
                this.xVelocity += .3;
            }
        }
        else if(this.xVelocity < 0.0 && this.xVelocity > -1)
        {
            this.xVelocity = 0;
        }
        else if(this.xVelocity > 0.0)
        {
            if(this.z > 0)
            {
               this.xVelocity -= .05;
            }
            else if(this.z <= 0)
            {
                this.xVelocity -= .3;
            }
        }
        else if(this.xVelocity > 0.0)
        {
            this.xVelocity = 0;
        }
        else
        {
            this.xVelocity = 0.0;
        }
        if(this.yVelocity < 0 && this.yVelocity < -1)
        {
            if(this.z > 0)
            {
               this.yVelocity += .05;
            }
            else if(this.z <= 0)
            {
                this.yVelocity += .3;
            }
        }
        else if(this.yVelocity < 0 && this.yVelocity > -1)
        {
            this.yVelocity = 0;
        }
        else if(this.yVelocity > 0 && this.yVelocity > 1)
        {
            if(this.z > 0)
            {
               this.yVelocity -= .05;
            }
            else if(this.z <= 0)
            {
                this.yVelocity -= .3;
            }
        }
        else if(this.yVelocity > 0 && this.yVelocity < 1)
        {
            this.yVelocity = 0;
        }
        else
        {
            this.yVelocity = 0;
        }

        if(this.z > 0)
        {
            this.zVelocity -= .3;
        }
        else if(this.z <= 0  && this.zVelocity < 0)
        {
            this.zVelocity /= 3;
            this.zVelocity *= -1;
        }

    }
}