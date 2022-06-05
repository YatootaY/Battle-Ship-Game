import GameBoard from "./gameboard.js"

const Player = () =>{

  const ships = [];
  const board = GameBoard();
  const randomMoves = ( () => {
    let array= [];
    for (let i = 0 ; i < 10 ; i++){
      for (let j = 0 ; j < 10 ; j++){
        array.push([i,j]);
      }
    }
    const shuffle = function (array) {
      array.sort(() => Math.random() - 0.5);
    }
    shuffle(array);
    return array;
  })();

  const addShip = (ship,location,horizontal) => {
    ships.push(ship);
    board.placeShip(ship,location,horizontal);
  }

  const getRandomMoves = () => {
    let move = randomMoves[0];
    randomMoves.shift();
    return move;
  }

  const addShipRandom = (ship) => {
    let location;
    let horizontal;
    do {
      horizontal = Math.random() < 0.5;
      location = [];
      if (horizontal){
        location.push(Math.floor(Math.random() * 9));
        location.push(Math.floor(Math.random() * (9 - ship.length)));
      }else{
        location.push(Math.floor(Math.random() * (9 - ship.length)));
        location.push(Math.floor(Math.random() * 9));
      }
      ship.horizontal = horizontal;
      ship.position = location;
    } while (board.checkCollide(ship));

    ships.push(ship);
    board.placeShip(ship,location,horizontal);
  }

  return {ships,board,addShip,addShipRandom,getRandomMoves};
}

export default Player;
