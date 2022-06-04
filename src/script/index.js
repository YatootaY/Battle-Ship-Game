import '../styles/style.css'
import UI from "./ui.js"
import Player from "./player.js"

const shipSizes = [5,4,3,3,2];

class Game{
  constructor(){
    this.player = Player();
    this.ai = Player();
    this.currentInputLength = 5;
    this.currentHorizontal = true;
  }

  start(){
    UI.loadPage();
  }
}

const game = new Game();
document.addEventListener('DOMContentLoaded', game.start);
