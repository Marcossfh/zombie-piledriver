let timer2 = 100

class Game {

    //propiedades
    constructor() {
        
        //coche
        this.coche = new Coche() //el juego empieza con un coche,esto genera el coche desde coche.js
        //----------------------------------------
        //time
        this.contador = new Contador()
        //this.cuentaRegresiva  = new Contador()
        //this.timeLimit = timeLimit
        //time remaining
        //this.timeRemaining = timeRemaining 
        //----------------------------------------
        
        //obstaculoss
            //this.unObstaculo = new Obstaculos()
            //esta seria  soolo uno, necesitamos mas
        this.obstaculosArr = []
        //zombies
        //this.unZombie = new Zombies()
        this.zombiesArr = []
        //ids de intervalos
        this.gameIntervalId;
        
        this.obstaculosIntervalId;

        this.zombiesIntervalId;

        this.timerId;
    }

    //metodos

            //movimiento  obstaculos

    obstaculoAparece(){
        
        let nuevoObstaculo = new Obstaculos()  
        this.obstaculosArr.push(nuevoObstaculo)
    
    
    }

    iniciarFrecuenciaObstaculos(){
        this.obstaculosIntervalId = setInterval(() => {
            this.obstaculoAparece()
        },3000)
    }
            
            //movimiento zombies
            
    zombieAparece(){
        let nuevoZombie = new Zombies()
        this.zombiesArr.push(nuevoZombie)
    }

    iniciarFrecuenciaZombies(){
        this.zombiesIntervalId  = setInterval(() => {
            this.zombieAparece()
        }, 2000)

    }

//----------------------------------------
    
    
    
//----------------------------------------


            //colisiones

            
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
                console.log("golpe obstaculo")
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
                // ¡colisión detectada!
                console.log("zombie estampao")           
                timer2 += 0.5
                
              }
            
        })
    }

    
        //accion de gameover

    gameOver(){
        //hay que detener  loos intervalos para que no pete el juego aunque haya terminado
        clearInterval(this.gameIntervalId)
        clearInterval(this.obstaculosIntervalId)
        clearInterval(this.zombiesIntervalId)
        clearInterval(this.timerId)
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
        
        //this.unZombie.zombiesMovementEffect
        
        //funcion zombies en moovimiento
        this.zombiesArr.forEach((eachZombie) => {
            eachZombie.zombiesMovementEffect()
        })
        this.colisionZombiesCoche()
        //funcion contador

       
    }


    contadorInicio(){
        
        let timerId = setInterval (() => {
            timer2 = timer2 -1
            this.contador.node.innerText = timer2
    

            if(timer2 === 0){
                this.gameOver()
            }
         /*if(this.seconds1 === 0 && this.seconds2 === 0){
            this.minutes--
            this.seconds2 = 5
            this.seconds1 = 9
         }else if(this.seconds1 ===0){
            this.seconds2--
            this.seconds1 = 9
         }*/
    
         
        }, 100)
        
        
        
            
        }


    start() {
        this.gameIntervalId = setInterval(() => {
            this.gameLoop()
            //console.log("juego en marcha")
            //aqui inicio juego
        }, Math.round(1000/60)) //va a 60fps

    }
    /*reStart(){
        window.location.reload()
    } deberia funcionar, opcion 2*/
}