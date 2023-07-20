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

    constructor(xVal, yVal, widthVal, heightVal, aBall, baseManagerVal, pictureVal)
    {
        super(xVal, yVal, widthVal, heightVal, baseManagerVal, pictureVal);
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
        window.addEventListener("click", (event) => 
            {this.clickHandler(event.clientX, event.clientY)});
    }


    
}