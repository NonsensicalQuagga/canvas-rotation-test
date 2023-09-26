import Rectangle from "./Rectangle";

const width = 800;
const height = 600;
const radius = 100;
export function setup (element){
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    element.appendChild(canvas);
    canvas.width = width;
    canvas.height = height;
    let rectangle = new Rectangle()
    
    
    function step(){
        context.clearRect(0, 0, width, height);
        context.beginPath();
    context.fillStyle = "green";
    context.fillRect(0,0,width,height);
    context.arc(width/2 -radius/4, height/2 -radius/4, radius, 0, 2 * Math.PI);
    context.stroke();
        rectangle.draw(context);   
    
        window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
    


}