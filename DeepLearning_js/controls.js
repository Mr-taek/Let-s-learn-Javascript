class Controls{
    constructor(){
        this.forward=false
        this.left=false;
        this.right=flase;
        this.reverse=false
        this.#addkeyboardListeners();
    }
    // hashtag means private method here, No one can't contorls this method outside of class
    #addkeyboardListeners(){
        document.onkeydown=(event)=>{
            switch(event.key){
                case "ArrowLeft":
                    this.left=true;
                    break;
                case "ArrowRitht":
                    this.right=true;
                    break
                case "ArrowUp":
                    this.forward=true
                    break
                case "ArrowDown":
                    this.reverse=true
                    break
                
            }
            console.table(this)
        }
        document.onkeyup=(event)=>{
            switch(event.key){
                case "ArrowLeft":
                    this.left=false;
                    break;
                case "ArrowRitht":
                    this.right=false;
                    break
                case "ArrowUp":
                    this.forward=false
                    break
                case "ArrowDown":
                    this.reverse=false
                    break
                
            }
            console.table(this)
        }
    }
}