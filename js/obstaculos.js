class Obstaculos {

constructor(){  

this.node = document.createElement("img")
this.node.id = "obstaculos"

this.node.src =  "./img/barricade.png"

gameBoxNode.append(this.node)

this.x = Math.random() * 600;
this.y = -50;    
this.w = 300;
this.h = 50;


this.node.style.position = "absolute";
this.node.style.top = `${this.y}px`;
this.node.style.left = `${this.x}px`
this.node.style.width = `${this.w}px`
this.node.style.height = `${this.h}px`

this.speed = 2;
}

//movimiento obstaculos

movementEffect() {

        this.y += this.speed;
        this.node.style.top = `${this.y}px`

}



}