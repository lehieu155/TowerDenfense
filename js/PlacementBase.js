class PlacementBase{
    constructor({postion = {x:0,y:0}}){
        this.postion=postion;
        this.size = 64;
        this.color = 'rgba(255, 255, 255, 0.15)'
    }
    draw(){
        c.fillStyle = this.color;
        c.fillRect(this.postion.x, this.postion.y, this.size, this.size);
    }
}