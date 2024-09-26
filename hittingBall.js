class HittingBall extends Ball
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
    bounced;
    movingToCamera;
    thrown;

    constructor(xVal, yVal, zVal, widthVal, heightVal, xVel, yVel, zVel, pictureVal)
    {
        super(xVal, yVal, zVal, widthVal, heightVal, xVel, yVel, zVel, pictureVal);
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
        this.bounced = false;
        this.inHandBool = false;
        this.shadow = new Image();
        this.shadow.src = "ballShadow-01.png";
        this.movingToCamera = true;
        this.thrown = false;
        
    }

    executeMoves()
    {
        
        this.y += this.yVelocity;
        this.z += this.zVelocity;
        if(this.thrown)
        {
            this.height += this.z;
            this.width += this.z;
        }
    

        if(this.y >= canvas.height)
        {
            this.movingToCamera = false;
        }
    }
}