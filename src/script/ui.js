import Game from "./index.js"
import Player from "./player.js"
import GameBoard from "./gameboard.js"
import Ship from "./ship.js"

export default class UI{

  static loadPage(){
    UI.createGrids();
    UI.startInputField();
  }

  static createGrids(){
    const humanGrid = document.getElementById("human");
    const aiGrid = document.getElementById("ai");

    UI.putGridEle(humanGrid);
    UI.putGridEle(aiGrid);
  }

  static putGridEle(parentDiv){
    for (let i = 0; i < 10 ; i++){
      for (let j = 0; j < 10 ; j++){
        let gridEle = document.createElement("div");
        gridEle.classList.add("grid-ele");
        gridEle.dataset.coord = `${i},${j}`;
        parentDiv.appendChild(gridEle);
      }
    }
  }

  static startInputField(){
    const inputShip = document.getElementById("input-ship");
    const overlay = document.querySelector(".overlay");
    overlay.classList.add("active");
    setTimeout(()=>{
      inputShip.classList.add("active");
    },400);
    const inputGrid = document.getElementById("input-grid");
    UI.putGridEle(inputGrid);
    UI.makeInputHover();
  }

  static endInputField(){
    const inputShip = document.getElementById("input-ship");
    const overlay = document.querySelector(".overlay");
    inputShip.classList.remove("active");
    overlay.classList.remove("active");
  }

  static makeInputHover(){
    UI.setUpRotate();
    UI.promiseHover();
  }

  static setUpRotate(){
    const rotate = document.getElementById("rotate");
    rotate.value = true;
    rotate.addEventListener("click", () => {
      rotate.value = !(rotate.value === "true");
    });
  }

  static async promiseHover(){
    const ships = [Ship(5),Ship(4),Ship(3),Ship(3),Ship(2)];
    for (let i = 0 ; i < ships.length ; i++){
      await UI.makePromise(ships[i])
    }
    UI.endInputField();
  }

  static async makePromise(ship){
    return new Promise((resolve, reject) => {
      const length = ship.length;
      const inputGrid = document.getElementById("input-grid");
      const gridEle = inputGrid.querySelectorAll(".grid-ele");
      const onHoverEventList = [];
      const onClickEventList = [];
      for (let key = 0 ; key < gridEle.length ; key++){

        const onHoverEvent = function () {
          const horizontal = document.getElementById("rotate").value;
          const data = gridEle[key].getAttribute("data-coord").split(",").map(Number);
          const hoverBlocks = [];
          for (let i = 0 ; i < length ; i++){
            let x = data[0];
            let y = data[1];
            if (horizontal === "true"){
              y += i;
            }else{
              x += i;
            }
            if (y > 9 || x > 9){
              continue;
            }
            hoverBlocks.push([x,y]);
          }
          for (let i = 0 ; i < hoverBlocks.length ; i++){
            const hoverBlock = inputGrid.querySelector(`[data-coord="${hoverBlocks[i].join(",")}"]`);
            hoverBlock.style.backgroundColor = "red";
          }
        }
        onHoverEventList.push(onHoverEvent);
        gridEle[key].addEventListener('mouseover',onHoverEvent);
        gridEle[key].addEventListener('mouseout',function outHoverEvent(e) {
          const horizontal = document.getElementById("rotate").value;
          const data = gridEle[key].getAttribute("data-coord").split(",").map(Number);
          const hoverBlocks = [];
          for (let i = 0 ; i < length ; i++){
            let x = data[0];
            let y = data[1];
            if (horizontal === "true"){
              y += i;
            }else{
              x += i;
            }
            if (y > 9 || x > 9){
              continue;
            }
            hoverBlocks.push([x,y]);
          }
          for (let i = 0 ; i < hoverBlocks.length ; i++){
            const hoverBlock = inputGrid.querySelector(`[data-coord="${hoverBlocks[i].join(",")}"]`);
            hoverBlock.style.backgroundColor = "";
          }
        });
      }



      for (let key = 0 ; key < gridEle.length; key++){
        const onClickEvent = function(e) {
          const location = e.target.getAttribute("data-coord").split(",").map(Number);
          const horizontal = (document.getElementById("rotate").value === "true");
          UI.editPlayerBoard(ship,location,horizontal);

          for (let i = 0 ; i < gridEle.length ; i++ ){
            gridEle[i].removeEventListener("mouseover",onHoverEventList[i]);
            gridEle[i].removeEventListener("click",onClickEventList[i]);
          }
          resolve();
        }
        onClickEventList.push(onClickEvent);
        (gridEle[key]).addEventListener('click', onClickEvent);
      }
    });
  }



  static editPlayerBoard(ship,location,horizontal){
    const player = Game.player;
    player.addShip(ship,location,horizontal);
    console.log(player.ships)
  }

  // static updatePlayerBoard(ship,location,horizontal){
  //
  // }

  static possiblePath(location,length,horizontal){
    const path = [];
    for (let i = 0 ; i < length ; i++){
      let x = location[0];
      let y = location[1];
      if (horizontal){
        y += i;
      }else{
        x += i;
      }
      if (y > 9 || x > 9){
        continue;
      }
      path.push([x,y]);
    }
    return path;
  }

}
