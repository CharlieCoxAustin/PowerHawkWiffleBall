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
    leftBool;
    forwardBool;

    constructor(xVal, yVal, zVal, widthVal, heightVal, pictureVal)
    {
        this.x = xVal;
        this.y = yVal;
        this.z = zVal;
        this.width = widthVal;
        this.height = heightVal;
        this.picture = new Image();
        this.picture.src = pictureVal;
        this.xVelocity = -3;
        this.yVelocity = -3;
        this.zVelocity = 10;
        this.shadow = new Image();
        this.shadow.src = "ballShadow-01.png"
        if(this.xVelocity <= 0) //this will be to help stop the ball drifting after it lands.
        {
            this.leftBool = true;
        }
        else
        {
            this.leftBool = false;
        }

        if(this.yVelocity <= 0)
        {
            this.forwardBool = true;
        }
        else
        {
            this.forwardBool = false;
        }
        console.log("leftbool: " + this.leftBool);
        console.log("forwardbool: " + this.forwardBool);
    }

    draw()
    {
        //c.drawImage(this.picture, this.x, this.y, this.width + (this.z / 3), this.height + (this.z / 3));
        c.drawImage(this.shadow, this.x, this.y + 10, this.width, this.height);
        c.drawImage(this.picture, this.x, this.y - this.z, this.width, this.height);
    }

    executeMoves()
    {
        this.x += this.xVelocity;
        this.y += this.yVelocity;
        this.z += this.zVelocity;

        this.passiveMove();
        console.log('xVelocity = ' + this.xVelocity);
        console.log('yVelocity = ' + this.yVelocity);
        console.log('zVelocity = ' + this.zVelocity);
        console.log('x = ' + this.x);
        console.log('y = ' + this.y);
        console.log('z = ' + this.z);
    }

    passiveMove()
    {
        if(this.xVelocity < 0.0 && this.leftBool == true)
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
        else if(this.xVelocity < 0.0 && this.leftBool == false)
        {
            this.xVelocity = 0;
        }
        else if(this.xVelocity > 0.0 && this.leftBool == false)
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
        else if(this.xVelocity > 0.0 && this.leftBool == true)
        {
            this.xVelocity = 0;
        }
        else
        {
            this.xVelocity = 0.0;
        }

        if(this.yVelocity < 0 && this.forwardBool == true)
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
        else if(this.yVelocity < 0 && this.forwardBool == false)
        {
            this.yVelocity = 0;
        }
        else if(this.yVelocity > 0 && this.forwardBool == false)
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
        else if(this.yVelocity > 0 && this.forwardBool == true)
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
        else if(this.z <= 0  && this.zVelocity < 0) //this is freaking out because z is still 0 at the moment it bounces.
        {
            this.zVelocity /= 3;
            this.zVelocity *= -1;
        }

    }
}