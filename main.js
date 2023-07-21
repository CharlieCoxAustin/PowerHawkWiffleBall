var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth - 50;
canvas.height = window.innerHeight - 50;
c = canvas.getContext("2d");
a = new Audio();




//these will be made into their own classes, and are currently in a test phase, which is why they're in main
theRunnerFactory = new RunnerFactory();
theFielderArray = new FielderFactory();
theBaseManager = new BaseFactory();
theBaseManager.addBase(new Base(1390, 495, 55, 55, theFielderArray, theRunnerFactory, "base-01.png"));
theBaseManager.addBase(new Base(945, 410, 55, 55, theFielderArray, theRunnerFactory, "base-01.png"));
theBaseManager.addBase(new Base(525, 505, 55, 55, theFielderArray, theRunnerFactory, "base-01.png"));
theBaseManager.addBase(new Base(950, 745, 55, 55, theFielderArray, theRunnerFactory, "homePlate-01.png"));
theField = new Field(0, 0, canvas.width, canvas.height, "grassBaseballField-01.png");
theBall = new Ball(850, 650, 3, 30, 30, 3, -5, 9, "wiffleBall-01.png");
theFielderArray.addFielder(new SecondBaseman(theBaseManager.baseArray[1].x + 150,theBaseManager.baseArray[1].y - 100, 125, 125, theBall, theBaseManager, "charlieSpriteSheet-01.png"));
theFielderArray.addFielder(new ThirdBaseman(theBaseManager.baseArray[2].x + 100, theBaseManager.baseArray[2].y - 150, 125, 125, theBall, theBaseManager, "charlieSpriteSheet-01.png"));
theFielderArray.addFielder(new Fielder(1350, 150, 125, 125, theBall, theBaseManager, "rocketSpriteSheet-01.png")); //rightField
theFielderArray.addFielder(new Fielder(450, 150, 125, 125, theBall, theBaseManager, "rocketSpriteSheet-01.png")); //leftField
theFielderArray.addFielder(new Fielder(850, 50, 125, 125, theBall, theBaseManager, "rocketSpriteSheet-01.png")); //centerField
theFielderArray.addFielder(new FirstBasemen(theBaseManager.baseArray[0].x - 150, theBaseManager.baseArray[0].y - 100, 125, 125, theBall, theBaseManager, "charlieSpriteSheet-01.png"));
theRunnerFactory.addRunner(new BaseRunner(950, 650, 125, 125, -1, theBaseManager, "joeSpriteSheet-01.png")); //batter
theRunnerFactory.addRunner(new BaseRunner(theBaseManager.baseArray[0].x - 65, theBaseManager.baseArray[1].y, 125, 125, 0, theBaseManager, "joeSpriteSheet-01.png")); //runner on first.

gameLoop();

function gameLoop()
{
    requestAnimationFrame(gameLoop);
    c.clearRect(0,0,innerWidth,innerHeight);

    theFielderArray.whoClosest(theBall.x, theBall.y);
    theRunnerFactory.checkForForce();
    theRunnerFactory.executeMoves();
    theBall.executeMoves();
    theFielderArray.runToBase();
    theFielderArray.executeMoves();
    theBaseManager.checkForBall();
    theField.draw();
    theBaseManager.draw();
    theBall.draw();
    theFielderArray.draw();
    theRunnerFactory.draw();

}