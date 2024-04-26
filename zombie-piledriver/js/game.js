class Game {

    //propiedades
    constructor() {
        //background
        //coche
        this.coche = new Coche() //el juego empieza con un coche
        //obstaculos
            //this.unObstaculo = new Obstaculos()
            //esta seria  soolo uno, necesitamos mas
        this.obstaculosArr = []
        //ids de intervalos
        this.gameIntervalId;
        this.obstaculosIntervalId;



    }

    //metodos

    

    obstaculoAparece(){
        
        let nuevoObstaculo = new Obstaculos()  //(randomPosY)
        this.obstaculosArr.push(nuevoObstaculo)
    
    
    }

    iniciarFrecuenciaObstaculos(){
        this.obstaculosIntervalId = setInterval(() => {
            this.obstaculoAparece()
        },3000)
    }
            
            //movimiento zombies
            
            //colisiones

            //accion de gameover
    colisionObstaculosCoche(){
        //necesitamos coche y obstaculos
        this.obstaculosArr.forEach((eachObstaculo) => {

            if (
                this.coche.x < eachObstaculo.x + eachObstaculo.w &&
                this.coche.x + this.coche.w > eachObstaculo.x &&
                this.coche.y < eachObstaculo.y + eachObstaculo.h &&
                this.coche.h + this.coche.y > eachObstaculo.y
              ) {
                // ¡colisión detectada!
                console.log("coche se estampo")
                //invocar func gameover
                this.gameOver()
              }


        })
    }

    gameOver(){
        //hay que detener  loos intervalos para que no pete el jjuego aunque haya terminado
        clearInterval(this.gameIntervalId)
        clearInterval(this.obstaculosIntervalId)
        //ocultar pantalla de juego
        gameScreenNode.style.display = "none"
        //pantalla final
        gameOverScreenNode.style.display = "flex"
    }


    //BONUS
            //musica
            //fx sonido


    gameLoop(){

        //this.unObstaculo.movementEffect()
        //seria para mover un obstaculo, ahora son mas:
        this.obstaculosArr.forEach((eachObstaculo) => {
            eachObstaculo.movementEffect()
        })
        this.colisionObstaculosCoche()
        //????que funciones llamo
        //funcion zombies en moovimiento
        //funcion de obstaculos
        //captura de teclas?
    }

    start() {
        this.gameIntervalId = setInterval(() => {
            this.gameLoop()
            //console.log("juego en marcha")
            //aqui inicio juego
        }, Math.round(1000/60)) //va a 60fps

    }
    
}