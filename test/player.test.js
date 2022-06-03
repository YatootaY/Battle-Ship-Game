import Player from "../src/player.js"

describe("Player Functions", () => {

  let testPlayer;
  let fakeShip;
  beforeEach(() => {
    testPlayer = Player();
    fakeShip = {
      hits: [],
      length: 4,
      hit: (location) => {
        fakeShip.hits.push(location);
      },
      issunk: () => {
        let answer = [...Array(fakeShip.length).keys()].join(',') === fakeShip.hits.sort().join(',')
        return answer;
      }
    };
  })

  test("Own ships", ()=> {
    expect(testPlayer.ships).not.toBeUndefined();
  })

  test("Own Board", () => {
    expect(testPlayer.board).not.toBeUndefined();
  })

  test("Add Ship - Human", () =>{
    testPlayer.addShip(fakeShip,[0,0],false)
    expect(testPlayer.ships).toContain(fakeShip);
  })

  test("Add Ship - AI", () =>{
    testPlayer.addShipRandom(fakeShip)
    expect(testPlayer.ships).toContain(fakeShip);
  })

})
