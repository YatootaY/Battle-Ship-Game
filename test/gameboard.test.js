import GameBoard from '../src/gameboard.js'

describe("Gameboard functions", () => {

  let testBoard;
  let fakeShip;
  beforeEach(() => {
    testBoard = GameBoard(5);
    fakeShip = {
      hits: [],
      length: 4,
      hit: (location) => {
        hits.push(location);
      }
    };
  })

  test("Have 10 x 10 array", () => {
    expect(testBoard.board.length).toBe(10);
    expect(testBoard.board[0].length).toBe(10);
  });

  test("Null array at start", () => {
    for (let i = 0 ; i < 10 ; i++){
      for(let j = 0 ; j < 10 ; j++){
        expect(testBoard.board[i][j]).toBeNull();
      }
    }
  });

  test("Place ship on board - Horizontal", () => {
    testBoard.placeShip(fakeShip,[0,0],true);
    expect(testBoard.board[0][0]).toEqual([fakeShip,0]);
    expect(testBoard.board[0][1]).toEqual([fakeShip,1]);
    expect(testBoard.board[0][2]).toEqual([fakeShip,2]);
    expect(testBoard.board[0][3]).toEqual([fakeShip,3]);

  });

  test("Place ship on board - Vertical", () => {
    testBoard.placeShip(fakeShip,[0,0],false);
    expect(testBoard.board[0][0]).toEqual([fakeShip,0]);
    expect(testBoard.board[1][0]).toEqual([fakeShip,1]);
    expect(testBoard.board[2][0]).toEqual([fakeShip,2]);
    expect(testBoard.board[3][0]).toEqual([fakeShip,3]);
  });

  // test("recieve hit - hit", () => {
  //   testBoard.recieveHit([0,0])
  // });
  //
  // test("recieve hit - miss", () => {
  //   expect(testBoard.recieveHit()).toBe(0)
  // });

  test.todo("all sunk");

})
