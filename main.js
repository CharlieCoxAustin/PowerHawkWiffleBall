var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth - 50;
canvas.height = window.innerHeight - 50;
c = canvas.getContext("2d");
a = new Audio();




//these will be made into their own classes, and are currently in a test phase, which is why they're in main
theBaseManager = new BaseFactory();
theBaseManager.addBase(new Base(1390, 495, 55, 55, "base-01.png"));
theBaseManager.addBase(new Base(945, 410, 55, 55, "base-01.png"));
theBaseManager.addBase(new Base(525, 505, 55, 55, "base-01.png"));
theBaseManager.addBase(new Base(950, 745, 55, 55, "homePlate-01.png"));
theFielderArray = new FielderFactory();
theField = new Field(0, 0, canvas.width, canvas.height, "grassBaseballField-01.png");
theBall = new Ball(850, 650, 3, 30, 30, Math.random() * -8, -7, 7, "wiffleBall-01.png");
theFielderArray.addFielder(new Fielder(850, 250, 125, 125, theBall, theBaseManager, "charlieSpriteSheet-01.png"));
theFielderArray.addFielder(new Fielder(1150, 250, 125, 125, theBall, theBaseManager, "rocketSpriteSheet-01.png"));
theFielderArray.addFielder(new Fielder(1450, 250, 125, 125, theBall, theBaseManager, "joeSpriteSheet-01.png"));
baseRunner = new BaseRunner(950, 650, 125, 125, theBaseManager, "joeSpriteSheet-01.png");


gameLoop();

function gameLoop()
{
    requestAnimationFrame(gameLoop);
    c.clearRect(0,0,innerWidth,innerHeight);

    theFielderArray.whoClosest(theBall.x, theBall.y);
    baseRunner.executeMoves();
    theBall.executeMoves();
    theFielderArray.executeMoves();
    theField.draw();
    theBaseManager.draw();
    theBall.draw();
    baseRunner.draw();
    theFielderArray.draw();
    

}