class Hero{
    constructor(){
        this.width = 60;
        this.height = 60;
    }
    draw( ) {
        c.fillStyle = 'blue';
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
    shoot() {

    }
}

