import GameBoard from "./gameboard.js"

const Player = () =>{

  const ships = [];
  const board = GameBoard();
  const addShip = (ship,location,horizontal) => {
    ships.push(ship);
    board.placeShip(ship,location,horizontal);
  }

  const addShipRandom = (ship) => {
    let horizontal = Math.random() < 0.5;
    let location = [Math.floor(Math.random() * 10),Math.floor(Math.random() * 10)];
    ships.push(ship);
    board.placeShip(ship,location,horizontal);
  }

  return {ships,board,addShip,addShipRandom};
}

export default Player;
