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
theBall = new Ball(850, 650, 3, 30, 30, 5, -5, 9, "wiffleBall-01.png");
theFielderArray.addFielder(new SecondBaseman(theBaseManager.baseArray[1].x + 150,theBaseManager.baseArray[1].y - 100, 125, 125, theBall, theBaseManager, theFielderArray, "charlieSpriteSheet-01.png"));
theFielderArray.addFielder(new ThirdBaseman(theBaseManager.baseArray[2].x + 100, theBaseManager.baseArray[2].y - 150, 125, 125, theBall, theBaseManager, theFielderArray, "charlieSpriteSheet-01.png"));
theFielderArray.addFielder(new Fielder(1350, 150, 125, 125, theBall, theBaseManager, theFielderArray, "rocketSpriteSheet-01.png")); //rightField
theFielderArray.addFielder(new Fielder(450, 150, 125, 125, theBall, theBaseManager, theFielderArray, "rocketSpriteSheet-01.png")); //leftField
theFielderArray.addFielder(new Fielder(850, 50, 125, 125, theBall, theBaseManager, theFielderArray, "rocketSpriteSheet-01.png")); //centerField
theFielderArray.addFielder(new FirstBasemen(theBaseManager.baseArray[0].x - 150, theBaseManager.baseArray[0].y - 100, 125, 125, theBall, theBaseManager, theFielderArray, "charlieSpriteSheet-01.png"));
theRunnerFactory.addRunner(new BaseRunner(950, 650, 125, 125, -1, theBaseManager, "joeSpriteSheet-01.png")); //batter
theRunnerFactory.addRunner(new BaseRunner(theBaseManager.baseArray[0].x - 45, theBaseManager.baseArray[1].y - 15, 125, 125, -1, theBaseManager, "joeSpriteSheet-01.png")); //runner on first.
theRunnerFactory.addRunner(new BaseRunner(theBaseManager.baseArray[1].x - 45, theBaseManager.baseArray[1].y - 95, 125, 125, 0, theBaseManager, "joeSpriteSheet-01.png")); //runner on second

gameLoop();

function gameLoop()
{
    requestAnimationFrame(gameLoop);
    c.clearRect(0,0,innerWidth,innerHeight);
    //console.log('runner on? ' + theRunnerFactory.runnerArray[1].onBase);
    //console.log('runner x? ' + theRunnerFactory.runnerArray[1].x);
    //console.log('runner y? ' + theRunnerFactory.runnerArray[1].y);
    theFielderArray.whoClosest(theBall.x, theBall.y);
    theRunnerFactory.checkForForce();
    theRunnerFactory.executeMoves();
    theBall.executeMoves();
    theFielderArray.runToBase();
    theFielderArray.executeMoves();
    theBaseManager.checkForBall();
    theRunnerFactory.checkForTag(theFielderArray.fielderArray);
    theRunnerFactory.checkForFlyOut(theBall);
    theField.draw();
    theBaseManager.draw();
    theBall.draw();
    theFielderArray.draw();
    theRunnerFactory.draw();
    //console.log('ball Z?: ' + theBall.z);
    //console.log('second baseman on?: ' + theFielderArray.fielderArray[0].onBase);
    //console.log('batter on?: '+ theRunnerFactory.runnerArray[0].onBase);
    //console.log('batter base number?: ' + theRunnerFactory.runnerArray[0].base);
    //console.log('1runner base number?: ' + theRunnerFactory.runnerArray[1].base);
    //console.log('runner on? ' + theRunnerFactory.runnerArray[1].onBase);
    //console.log('2ndbasemen on?: ' + theFielderArray.fielderArray[0].onBase);
    //console.log('2ndbasemen holding ball?: ' + theFielderArray.fielderArray[0].holdingBall);
    //console.log('2nd base ball on base?' + theBaseManager.baseArray[1].ballOnBase);
    //console.log('force on batter?: ' + theRunnerFactory.runnerArray[0].forceOut);
    //console.log('force on 1runner?: ' + theRunnerFactory.runnerArray[1].forceOut);
    //console.log('force on 2runner?: ' + theRunnerFactory.runnerArray[2].forceOut);
    //console.log('2runner base number?: ' + theRunnerFactory.runnerArray[2].base);
    //console.log('3rdbasemen on? ' + theFielderArray.fielderArray[1].onBase);
    //console.log('3rbasemen holding ball?: ' + theFielderArray.fielderArray[1].holdingBall);
    //console.log('3rd base ball on base?' + theBaseManager.baseArray[2].ballOnBase);

}