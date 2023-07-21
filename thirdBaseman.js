class ThirdBaseman extends FirstBasemen
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
        super(xVal, yVal, widthVal, heightVal, aBall, baseManagerVal, pictureVal);
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

    calculateRunLine(baseNum)
    {
        let xDistance = (this.x + 50) - (this.baseManager.baseArray[2].x);    
        let yDistance = (this.y + 100) - this.baseManager.baseArray[2].y;
        let theta = Math.atan2(yDistance, xDistance);
        let movementX = this.speed * Math.cos(theta);            
        let movementY = this.speed * Math.sin(theta);
        this.xVelocity = movementX;
        this.yVelocity = movementY;
        if(xDistance < 15 && xDistance > -15 && yDistance < 15 && yDistance > -15)
        {
            this.xVelocity = 0;
            this.yVelocity = 0;
            this.onBase = true;
        }
    }

    runToBase()
    {   
        if(this.closest == false)
        {
            this.calculateRunLine(1);
        }
    }
}