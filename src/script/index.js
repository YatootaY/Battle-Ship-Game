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
game.start();




// function myPromiseGenerator(something) {
//   return new Promise((resolve, reject) => {
//     const inputGrid = document.getElementById("input-grid");
//     const gridEle = document.querySelectorAll(".grid-ele");
//     for (let key = 0 ; key < gridEle.length ; key++){
//       (gridEle[key]).addEventListener('click',function(e) {
//           resolve(something);
//       }, {once: true});
//     }
//   });
// }
//
// async function wait() {
//   let a = await myPromiseGenerator(5);
//   console.log(a);
//   let b = await myPromiseGenerator(4);
//   console.log(b);
//   let c = await myPromiseGenerator(3);
//   console.log(c);
// }
