
import GameBoard from "./gameboard.js"
import Ship from "./ship.js"
import Game from "./game.js"

class UI{

  static loadPage(){
    UI.createGrids();
    UI.startInputField();
    UI.placeAIships();
    UI.hoverAIBoard();
    UI.showEnemyShips();
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
      let call = null;
      do{
        call = await UI.makePromise(ships[i]);
      }while(! ('okay' in call));
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
          ship.horizontal = horizontal;
          ship.position = location;
          for (let i = 0 ; i < gridEle.length ; i++ ){
            gridEle[i].removeEventListener("mouseover",onHoverEventList[i]);
            gridEle[i].removeEventListener("click",onClickEventList[i]);
          }
          if (UI.isFree(ship)){
            UI.editPlayerBoard(ship,location,horizontal);
            UI.updatePlayerBoard();
            UI.updateInputBoard();

            resolve({okay:true});
          }else{
            resolve({notokay:true});
          }

        }
        onClickEventList.push(onClickEvent);
        (gridEle[key]).addEventListener('click', onClickEvent);
      }
    });
  }

  static isFree(ship){
    const player = Game.player;

    const inputGrid = document.getElementById("input-grid");
    const possiblePath = UI.possiblePath(ship);
    const placedShips = player.ships;
    let otherPossiblePath = possiblePath;
    for (let i = 0 ; i < placedShips.length ; i++){
      otherPossiblePath = otherPossiblePath.concat(UI.possiblePath(placedShips[i]));
    }
    const clearPath = otherPossiblePath
      .map(function (item) {
        return JSON.stringify(item);
      })
      .reduce(function (out, current) {
        if (out.indexOf(current) === -1) out.push(current);
        return out;
      }, [])
      .map(function (item) {
        return JSON.parse(item);
      });
    const isNotCrossed = (clearPath.length === otherPossiblePath.length);
    const isInRange = (possiblePath.length === ship.length);

    return (isInRange && isNotCrossed);
  }


  static editPlayerBoard(ship,location,horizontal){
    const player = Game.player;
    player.addShip(ship,location,horizontal);
  }

  static updatePlayerBoard(){
    const player = Game.player;
    const playerShips = player.ships;
    const playerGrid = document.getElementById("human");
    for (let i = 0 ; i < playerShips.length ; i++){
      const possiblePath = UI.possiblePath(playerShips[i])
      for (let j = 0 ; j < possiblePath.length; j++){
        const possibleBlocks = playerGrid.querySelector(`[data-coord="${possiblePath[j].join(",")}"]`);
        possibleBlocks.classList.add("ship");
      }
    }
  }

  static updateInputBoard(){
    const player = Game.player;
    const playerShips = player.ships;
    const inputGrid = document.getElementById("input-grid");
    for (let i = 0 ; i < playerShips.length ; i++){
      const possiblePath = UI.possiblePath(playerShips[i])
      for (let j = 0 ; j < possiblePath.length; j++){
        const possibleBlocks = inputGrid.querySelector(`[data-coord="${possiblePath[j].join(",")}"]`);
        possibleBlocks.classList.add("ship");
      }
    }
  }

  static possiblePath(ship){
    const location = ship.position;
    const length = ship.length;
    const horizontal = ship.horizontal;
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

  static placeAIships(){
    const ai = Game.ai;
    const ships = [Ship(5),Ship(4),Ship(3),Ship(3),Ship(2)];
    for (let i = 0 ; i < ships.length ; i++){
      ai.addShipRandom(ships[i]);
    }
  }

  static hoverAIBoard(){
    const aiGrid = document.getElementById("ai");
    const gridEle = aiGrid.querySelectorAll(".grid-ele");
    for (let i = 0 ; i< gridEle.length ; i++){
      gridEle[i].addEventListener("click", UI.onClickShip,{once: true});
    }
  }

  static onClickShip(e){
    const coord = e.target.getAttribute("data-coord").split(",").map(Number);
    const aiPlayer = Game.ai;
    const hit = aiPlayer.board.recieveHit(coord);
    if (hit){
      e.target.classList.add("hit");
    }else{
      e.target.classList.add("miss");
    }
    if (aiPlayer.board.allSunk()){
      console.log("hi");
    }
  }

  static showEnemyShips(){
    const placedShips = Game.ai.ships;
    const aiGrid = document.getElementById("ai");

    for (let i = 0 ; i < placedShips.length ; i++){
      const possiblePath = UI.possiblePath(placedShips[i])
      for (let j = 0 ; j < possiblePath.length; j++){
        const possibleBlocks = aiGrid.querySelector(`[data-coord="${possiblePath[j].join(",")}"]`);
        possibleBlocks.classList.add("ship");
      }
    }
  }

}

export default UI;
