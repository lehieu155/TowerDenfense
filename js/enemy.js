class Enemy{
    constructor({position = { x:0, y:0}}) {
        this.position = position;
        this.width = 40;
        this.height = 40;
    }

    draw( ) {
        c.fillStyle = 'red';
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update( ) {
        this.draw();
        this.position.x += 1;
    }
}