const GameBoard = () => {
  let board = Array.from(Array(10), x => Array.from(Array(10), x => null));

  const placeShip = (ship, location, horizontal = false) => {
    for (let i = 0 ; i < ship.length ; i++){
      if (horizontal){
        board[location[0]][location[1]+i] = [ship,i];
      }else{
        board[location[0]+i][location[1]] = [ship,i];
      }
    }
  };

  // const recieveHit = (location) => {
  //   let area = board[location[0]][location[1]];
  //   if (area){
  //     area.
  //   }
  // }

  return {board,placeShip}
}

export default GameBoard;
