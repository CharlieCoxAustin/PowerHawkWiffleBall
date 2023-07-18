var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth - 50;
canvas.height = window.innerHeight - 50;
c = canvas.getContext("2d");
a = new Audio();

console.log("running");
console.log("width and height: " + window.innerWidth + " " + window.innerHeight);
console.log(canvas);

//these will be made into their own classes, and are currently in a test phase, which is why they're in main
baseRunner = new Character(850, 650, 125, 125, "joeSpriteSheet-01.png");
theField = new Field(0, 0, canvas.width, canvas.height, "grassBaseballField-01.png");
theBall = new Ball(850, 650, 3, 30, 30, -8, -7, 15, "wiffleBall-01.png");
console.log(theField);

gameLoop();

function gameLoop()
{
    requestAnimationFrame(gameLoop);
    c.clearRect(0,0,innerWidth,innerHeight);

    theField.draw();
    baseRunner.executeMoves();
    theBall.executeMoves();
    theBall.draw();
    baseRunner.draw();


}