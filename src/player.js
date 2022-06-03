import GameBoard from "./gameboard.js"

const Player = () =>{

  const ships = [];
  const board = GameBoard();
  const addShip = (ship) => {
    ships.push(ship)
  }

  return {ships,board,addShip};
}

export default Player;
