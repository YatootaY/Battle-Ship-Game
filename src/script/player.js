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
    let location = [];
    if (horizontal){
      location.push(Math.floor(Math.random() * 10));
      location.push(Math.floor(Math.random() * (10 - ship.length)));
    }else{
      location.push(Math.floor(Math.random() * (10 - ship.length)));
      location.push(Math.floor(Math.random() * 10));
    }
    console.log(location);
    ship.positon = location;
    ships.push(ship);
    board.placeShip(ship,location,horizontal);
  }

  return {ships,board,addShip,addShipRandom};
}

export default Player;
