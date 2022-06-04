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
    const shipSizes = [5,4,3,3,2];
    for (let i = 0 ; i < shipSizes.length ; i++){
      console.log(await UI.makePromise(shipSizes[i]))
    }
  }

  static async makePromise(length){
    return new Promise((resolve, reject) => {
      const inputGrid = document.getElementById("input-grid");
      const gridEle = document.querySelectorAll(".grid-ele");
      for (let key = 0 ; key < gridEle.length ; key++){
        (gridEle[key]).addEventListener('mouseover',function(e) {
           gridEle[key].style.backgroundColor = "red";
        });
        (gridEle[key]).addEventListener('mouseout',function(e) {
           gridEle[key].style.backgroundColor = "";
        });
      }

      for (let key = 0 ; key < gridEle.length ; key++){
        (gridEle[key]).addEventListener('click',function(e) {
            resolve(length);
        }, {once: true});
      }
    });
  }

}
