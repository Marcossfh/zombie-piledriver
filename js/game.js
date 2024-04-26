let timer2 = 100

class Game {

    //PROPIEDADES
    constructor() {
        
        // 1.coche
        this.coche = new Coche() //generamos un nuevo coche desde coche.js
        
        // 2.timer
        this.contador = new Contador()
        
        // 3.obstaculos
            //this.unObstaculo = new Obstaculos()
            //esta seria  soolo uno, necesitamos mas
        this.obstaculosArr = []
        
        // 4.zombies
            //this.unZombie = new Zombies()
        this.zombiesArr = []
        
        // 5.ids de intervalos
        this.gameIntervalId;       
        this.obstaculosIntervalId;
        this.zombiesIntervalId;
        this.timerId;
    }

    //METODOS

        // 1.movimiento  obstaculos

    obstaculoAparece(){
        
        let nuevoObstaculo = new Obstaculos()  
        this.obstaculosArr.push(nuevoObstaculo)
    
    
    }

    iniciarFrecuenciaObstaculos(){
        
        this.obstaculosIntervalId = setInterval(() => {
            this.obstaculoAparece()
        },3000)
    }
            
        // 2.movimiento zombies
            
    zombieAparece(){
        let nuevoZombie = new Zombies()
        this.zombiesArr.push(nuevoZombie)
    }

    iniciarFrecuenciaZombies(){
        this.zombiesIntervalId  = setInterval(() => {
            this.zombieAparece()
        }, 2000)

    }


        // 3.colisiones
            
    colisionObstaculosCoche(){
        //necesitamos coche y obstaculos
        this.obstaculosArr.forEach((eachObstaculo) => {
            if (
                this.coche.x < eachObstaculo.x + eachObstaculo.w &&
                this.coche.x + this.coche.w > eachObstaculo.x &&
                this.coche.y < eachObstaculo.y + eachObstaculo.h &&
                this.coche.h + this.coche.y > eachObstaculo.y
              ) {                              
                //invocar func gameover
                this.gameOver()
              }
        })
    }

    colisionZombiesCoche(){
        this.zombiesArr.forEach((eachZombie) => {
            if (
                this.coche.x < eachZombie.x + eachZombie.w &&
                this.coche.x + this.coche.w > eachZombie.x &&
                this.coche.y < eachZombie.y + eachZombie.h &&
                this.coche.h + this.coche.y > eachZombie.y
              ) {                          
                timer2 += 0.5               
              }           
        })
    }

        // 4.gameover e  intervalos   

    gameOver(){
        //detener intervalos 
        clearInterval(this.gameIntervalId)
        clearInterval(this.obstaculosIntervalId)
        clearInterval(this.zombiesIntervalId)
        clearInterval(this.timerId)
        //ocultar pantalla de juego
        gameScreenNode.style.display = "none"
        //pantalla final
        gameOverScreenNode.style.display = "flex"
    }


        // 5.gameloop

    gameLoop(){

        //this.unObstaculo.movementEffect()
        //seria para mover un obstaculo, ahora son mas:
        this.obstaculosArr.forEach((eachObstaculo) => {
            eachObstaculo.movementEffect()
        })
        this.colisionObstaculosCoche()
        
        //this.unZombie.zombiesMovementEffect
        
        //funcion zombies en moovimiento
        this.zombiesArr.forEach((eachZombie) => {
            eachZombie.zombiesMovementEffect()
        })
        this.colisionZombiesCoche()
        //funcion contador
      
    }

        // 6.timer

    contadorInicio(){
        
        let timerId = setInterval (() => {
            timer2 = timer2 -1
            this.contador.node.innerText = timer2
    
            if(timer2 === 0){
                this.gameOver()
            }        
        }, 100)
                   
    }

        // 7.start

    start() {
        this.gameIntervalId = setInterval(() => {
            this.gameLoop()        
        }, Math.round(1000/60)) //va a 60fps

    }
    
}