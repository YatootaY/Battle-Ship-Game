import '../styles/style.css'
import UI from "./ui.js"
import Player from "./player.js"

const Game = {
    player: Player(),
    ai: Player(),
    start:() => {
      UI.loadPage();
    }
}

Game.start();


export default Game
