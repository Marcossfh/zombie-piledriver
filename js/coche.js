class Coche {

    constructor(){
        
        
        //nodo
        this.node = document.createElement("img")
        this.node.id = "coche" //opcional

        //img coche
        this.node.src = "./img/—Pngtree—red sports car top view_8950912 (1).png"

        gameBoxNode.append(this.node) ///añade coche al game-box

        this.x = 340; //posicion eje x
        this.y = 450; //posicion eje y
        this.w = 120; //ancho
        this.h = 120; //alto
        
        
        this.node.style.position = "absolute"
        this.node.style.top = `${this.y}px`
        this.node.style.left = `${this.x}px`
        
        this.node.style.width = `${this.w}px`
        this.node.style.height = `${this.w}px`
        //izquierda derecha
        //heigth and width
        //bottom de la pantalla
        //velocidad izda dcha
        this.speed = 50
    }
    
    
    moverCoche(event) {
        if(event.key === "ArrowRight"){
            this.x += this.speed
            this.node.style.left = `${this.x}px`
            
        
            console.log("mover choche dcha")
        }else if(event.key === "ArrowLeft"){
            this.x -= this.speed
            this.node.style.left = `${this.x}px`
           
            console.log("mover coche izda")
                
        }
        
    }
    
    
}
//SIEMPRE QUE MODIFICAMOS ALGO DEL DOM TENEMOS QUEMODIFICAR EL NODO
//movimiento derecha izquierda coche

   

