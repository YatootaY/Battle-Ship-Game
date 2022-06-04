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
        gridEle.dataset.y = j;
        gridEle.dataset.x = i;
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
  }

  static endInputField(){
    const inputShip = document.getElementById("input-ship");
    const overlay = document.querySelector(".overlay");
    inputShip.classList.remove("active");
    overlay.classList.remove("active");
  }

}
