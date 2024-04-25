
//* ELEMENTOS DE DOM Y VARIABLES GLOBALES

// pantallas
const splashScreenNode = document.querySelector("#splash-screen")
const gameScreenNode = document.querySelector("#game-screen")
const gameOverScreenNode = document.querySelector("#game-over-screen")

// botones
const startBtnNode = document.querySelector("#start-btn")
const reStart = document.querySelector("#reStart")
// game box
const gameBoxNode = document.querySelector("#game-box")

//timer

const timer = document.querySelector("#timer")



let game //tenemos que declararla fuera del scope de la funcion startGame, si no no va. vacia porque aun no empezamos el juego


//* FUNCIONES GLOBALES DE CAMBIO DE ESTADO E INICIO
function startGame(){
    console.log("iniciando juego")
    // 1.ocultar pantalla
    splashScreenNode.style.display = "none"
    // 2.mostrar pantalla
    gameScreenNode.style.display = "flex"
    // 3.iniciar juego
    game = new Game()
    console.log(game)
    game.start()
    game.iniciarFrecuenciaObstaculos()
    game.iniciarFrecuenciaZombies()
    game.contadorInicio()
    //contador.timer()
}




//* EVENT LISTENERS
startBtnNode.addEventListener("click", startGame)
console.log("iniciar juego")

document.addEventListener("keydown", (event) => {
    console.log(event.key);
    game.coche.moverCoche(event)
})

reStart.addEventListener("click", () => {
    window.location.reload()
} )


        
    
