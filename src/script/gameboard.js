const GameBoard = () => {
  const board = Array.from(Array(10), x => Array.from(Array(10), x => null));
  let boardCount = 0;
  let hitCount = 0;
  const placeShip = (ship, location, horizontal = false) => {
    if (location[0] < 0 || location[0] > 9 || location[1] < 0 || location[1] > 9 || board[location[0]][location[1]]) return null;
    for (let i = 0 ; i < ship.length ; i++){
      if (horizontal){
        board[location[0]][location[1]+i] = [ship,i];
      }else{
        board[location[0]+i][location[1]] = [ship,i];
      }
    }
    boardCount += 1;
  };

  const recieveHit = (location) => {
    let area = board[location[0]][location[1]];
    if (area === -1) return null;
    if (area){
      area[0].hit(area[1]);
      if (area[0].issunk()){
        hitCount+=1;
      }
      return true;
    }else{
      board[location[0]][location[1]] = -1;
      return false;
    }
  }

  const allSunk = () => {
    console.log(boardCount,hitCount)
    return boardCount === hitCount;
  }

  return {board,placeShip,recieveHit,allSunk}
}

export default GameBoard;
