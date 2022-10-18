class Car{
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height

        this.controls=new Controls
    }
    drw(ctx){
        // Now im making car ..
        ctx.beginPath(),
        ctx.rect(this.x-this.width/2,
        thos.width,
        this.height
        );
        ctx.fill()
    }
}