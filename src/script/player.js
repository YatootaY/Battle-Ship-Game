import GameBoard from "./gameboard.js"

const Player = () =>{

  const ships = [];
  const board = GameBoard();
  const addShip = (ship,location,horizontal) => {
    ships.push(ship);
    board.placeShip(ship,location,horizontal);
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

  return {ships,board,addShip,addShipRandom};
}

export default Player;
