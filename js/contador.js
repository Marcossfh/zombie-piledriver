


class Contador {
constructor(){

    this.node = document.createElement("span")
    this.node.id = "timer"
    this.node.innerText = 100
    
    gameBoxNode.append(this.node)
    
    //POSICION    
    this.x = 600; //posicion eje x
    this.y = 30; //posicion eje y
    this.w = 400; //ancho
    this.h = 200; //alto
     
    
    this.node.style.position = "absolute"
        this.node.style.top = `${this.y}px`
        this.node.style.left = `${this.x}px`
        
        this.node.style.width = `${this.w}px`
        this.node.style.height = `${this.w}px`
    
}   

}