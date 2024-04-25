class Zombies {

constructor(){

    this.node = document.createElement("img")
    this.node.id = "zombies"

    this.node.src = "./img/zombie-juego.png"

    gameBoxNode.append(this.node)
    

this.x = Math.random() * 600;
this.y = - 50;  
this.w = 100;
this.h = 100;


this.node.style.position = "absolute";
this.node.style.top = `${this.y}px`;
this.node.style.left = `${this.x}px`
this.node.style.width = `${this.w}px`
this.node.style.height = `${this.h}px`

this.speed = 3;

}
zombiesMovementEffect() {

    this.y += this.speed;
    this.node.style.top = `${this.y}px`


}


}