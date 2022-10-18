class Car{
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height

        this.controls=new Controls
    }
    update(){
        if(this.controls.forward){
            this.y-=2
            
        }
        if(this.controls.reverse){
            this.y+=2
        }
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