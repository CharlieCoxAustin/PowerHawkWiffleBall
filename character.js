class Character
{
    x;
    y;
    width;
    height;
    picture;
    facingRight;
    base;
    yVelocity;
    xVelocity;
    spriteFrame;
    frameCounter;

    constructor(xVal, yVal, widthVal, heightVal, pictureVal)
    {
        this.x = xVal;
        this.y = yVal;
        this.width = widthVal;
        this.height = heightVal;
        this.picture = new Image();
        this.picture.src = pictureVal;
        this.facingRight = true;
        this.base = 0;
        this.yVelocity = 1;
        this.xVelocity = 2;
        this.spriteFrame = 1;
        this.frameCounter = 0;

    }

    draw()
    {
        //drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
        ++this.frameCounter;
        if(this.frameCounter >= 3)
        {
            ++this.spriteFrame;
            this.frameCounter = 0;
        }
        if(this.spriteFrame >= 8)
        {
            this.spriteFrame = 0;
        }

        if(this.base == 0)
        {
            this.runRight();
            if(this.x >= 1300  && this.y <= 400)
            {
                this.base = 1;
                this.xVelocity *= -1
                this.yVelocity = .4;
            }
        }
        else if(this.base == 1)
        {
            this.runLeft();
            if(this.x <= 900)
            {
                this.base = 2;
                this.yVelocity = -.5;
            }
        }
        else if(this.base == 2)
        {
            this.runLeft();
            if(this.x <= 475)
            {
                this.base = 3;
                this.yVelocity = -1.2;
                this.xVelocity *= -1;
            }
        }
        else if(this.base == 3)
        {
            this.runRight();
            if(this.x >= 900)
            {
                this.base = 4;
            }
        }
        else if(this.base == 4)
        {
            this.xVelocity = 1;
            this.yVelocity = .3
            if(this.x <= 1100)
            {
                this.runRight();
            }
            else if(this.x >= 1100)
            {
                this.xVelocity = 0;
                this.yVelocity = 0;
                this.standStillLeft();
            }
        }

    }

    executeMoves()
    {
        this.x += this.xVelocity;
        this.y -= this.yVelocity;
    }

    runRight()
    {
        if(this.spriteFrame == 0)
            {
                c.drawImage(this.picture,  0, 0, 298, 225, this.x, this.y + this.yVelocity, this.width, this.height);
            }
            else if(this.spriteFrame == 1)
            {  //237!!!!!! WINNER
                c.drawImage(this.picture,  299, 0,  298, 225, this.x, this.y + this.yVelocity - 5, this.width, this.height);
            }
            else if(this.spriteFrame == 2)
            { //520!!!!! WINNER
                c.drawImage(this.picture,  597, 0, 298, 225, this.x, this.y + this.yVelocity - 10, this.width, this.height);
            }
            else if(this.spriteFrame == 3)
            {  //770!!!!! WINNER
                c.drawImage(this.picture,  299, 0,  298, 225, this.x, this.y + this.yVelocity - 5, this.width, this.height);
            }
            else if(this.spriteFrame == 4)
            {
                c.drawImage(this.picture,  0, 0,  298, 225, this.x, this.y + this.yVelocity, this.width, this.height);
            }
            else if(this.spriteFrame == 5)
            {
                c.drawImage(this.picture,  895, 0,  298, 225, this.x, this.y + this.yVelocity - 5, this.width, this.height);
            }
            else if(this.spriteFrame == 6)
            {
                c.drawImage(this.picture,  1193, 0,  298, 225, this.x, this.y + this.yVelocity - 10, this.width, this.height);
            }
            else if(this.spriteFrame == 7)
            {
                c.drawImage(this.picture,  895, 0,  298, 225, this.x, this.y + this.yVelocity - 5, this.width, this.height);
            }
    }

    runLeft()  //currently the same as run right
    {
        if(this.spriteFrame == 0)
            {
                c.drawImage(this.picture,  0, 299, 298, 225, this.x, this.y + this.yVelocity, this.width, this.height);
            }
            else if(this.spriteFrame == 1)
            {  //237!!!!!! WINNER
                c.drawImage(this.picture,  299, 299,  298, 225, this.x, this.y + this.yVelocity - 5, this.width, this.height);
            }
            else if(this.spriteFrame == 2)
            { //520!!!!! WINNER
                c.drawImage(this.picture,  597, 299, 298, 225, this.x, this.y + this.yVelocity - 10, this.width, this.height);
            }
            else if(this.spriteFrame == 3)
            {  //770!!!!! WINNER
                c.drawImage(this.picture,  299, 299,  298, 225, this.x, this.y + this.yVelocity - 5, this.width, this.height);
            }
            else if(this.spriteFrame == 4)
            {
                c.drawImage(this.picture,  0, 299,  298, 225, this.x, this.y + this.yVelocity, this.width, this.height);
            }
            else if(this.spriteFrame == 5)
            {
                c.drawImage(this.picture,  895, 299,  298, 225, this.x, this.y + this.yVelocity - 5, this.width, this.height);
            }
            else if(this.spriteFrame == 6)
            {
                c.drawImage(this.picture,  1193, 299,  298, 225, this.x, this.y + this.yVelocity - 10, this.width, this.height);
            }
            else if(this.spriteFrame == 7)
            {
                c.drawImage(this.picture,  895, 299,  298, 225, this.x, this.y + this.yVelocity - 5, this.width, this.height);
            }
    }

    standStillLeft()
    {
        c.drawImage(this.picture,  0, 299, 298, 225, this.x, this.y + this.yVelocity, this.width, this.height);
    }

}