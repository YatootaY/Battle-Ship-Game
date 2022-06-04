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
        parentDiv.appendChild(gridEle);
      }
    }
  }

}
