
const canvas = document.querySelector('canvas');
    const c = canvas.getContext('2d');

    canvas.width = 1280;
    canvas.height = 768;

    c.fillStyle = 'white';
    c.fillRect(0, 0, canvas.width, canvas.height);


 
    
    const placementBase = [];
    
    for (let i = 0; i<20; i++){
        placementBase.push (
            new PlacementBase({
                postion:{x:i*64,y:0}}))
        for (let j = 1; j<12; j++){
            placementBase.push (
                new PlacementBase({
                    postion:{x:i*64,y:j*64}}))
        }
    }

    
     
    const image = new Image()
    image.onload = () => {
        animate()
        
    }
    image.src = 'img/map.png';

    

const enemies = [];
for (i=0; i<10; i++){
    xoffset=64;
    enemies.push(new Enemy({position:{x:i*xoffset,y:332}}))
}

console.log(enemies)
function animate() {
    requestAnimationFrame(animate);
    c.drawImage(image, 0, 0);

    enemies.forEach((unit) => {
        unit.update();
    })

    placementBase.forEach((tile) => {
        tile.draw();
    })
}
