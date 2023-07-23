class FirstBasemen extends Fielder
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
    shadow;
    speed;
    throwPower;
    holdingBall;
    fielding;
    theBall;
    movingToMouse;
    mouseX;
    mouseY;
    closest;
    fielderFactory;
    baseManager;

    constructor(xVal, yVal, widthVal, heightVal, aBall, baseManagerVal, fielderFactoryVal, pictureVal)
    {
        super(xVal, yVal, widthVal, heightVal, aBall, baseManagerVal, fielderFactoryVal, pictureVal);
        this.x = xVal;
        this.y = yVal;
        this.width = widthVal;
        this.height = heightVal;
        this.picture = new Image();
        this.picture.src = pictureVal;
        this.facingRight = true;
        this.base = 0;
        this.yVelocity = 0;
        this.xVelocity = 0;
        this.spriteFrame = 1;
        this.frameCounter = 0;
        this.shadow = new Image();
        this.shadow.src="ballShadow-01.png";
        this.speed = 3;
        this.throwPower = 15;
        this.holdingBall = false;
        this.fielding = true;
        this.theBall = aBall;
        this.movingToMouse = false;
        this.closest = false;
        this.fielderFactory = fielderFactoryVal;
        this.baseManager = baseManagerVal;
        window.addEventListener("click", (event) => 
            {this.clickHandler(event.clientX, event.clientY)});
    }

    runToBase()
    {   
        if(this.closest == false)
        {
            this.calculateRunLine(0);
        }
    }

}