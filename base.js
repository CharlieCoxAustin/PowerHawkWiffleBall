class Base
{
    x;
    y;
    width;
    height;
    picture;

    constructor(xVal, yVal, widthVal, heightVal, picture)
    {
        this.x = xVal;
        this.y = yVal;
        this.width = widthVal;
        this.height = heightVal;
        this.picture = new Image();
        this.picture.src = picture;
    }

    draw()
    {
        c.drawImage(this.picture, this.x, this.y, this.width, this.height);
    }
}