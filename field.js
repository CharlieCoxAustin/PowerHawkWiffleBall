class Field {

    x;
    y;
    picture;
    width;
    height;

    constructor(xVal, yVal, widthVal, heightVal, pictureVal)
    {
        this.x = xVal;
        this.y = yVal;
        this.width = widthVal;
        this.height = heightVal;
        this.picture = new Image();
        this.picture.src = pictureVal;
    }

    draw()
    {
        //drawImage(image, dx, dy, dWidth, dHeight)
        c.drawImage(this.picture, this.x, this.y, this.width, this.height);
    }


}