export default class Rectangle{
    constructor(width,height){
    this.x = 0;
    this.y = 0;
    this.width = 20;
    this.height = 20;
    this.color = "blue";
    width = width;
    height = height
}   

draw(context){
    
    context.arc(800/2 -100/4, 600/2 -100/4, 100, 0, 2 * Math.PI);
    
    context.rotate((1 * Math.PI) / 180);
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
}

}