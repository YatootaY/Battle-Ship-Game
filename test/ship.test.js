import Ship from "../src/ship.js"

describe("Ship Functions", () => {

  let testShip;
  beforeEach(() => {
    testShip = Ship(5);
  })

  test("Have default hits attribute", () => {
    expect(testShip.hits).toEqual([]);
  })

  test("Have default sunk attrtiute", () => {
    expect(testShip.sunk).toBe(false);
  })

  test("Have length", () => {
    expect(testShip.length).not.toBeUndefined();
  })

  test("Get hit", () => {
    testShip.hit(2);
    expect(testShip.hits).toEqual([2]);
  })

  test("Get multiple hits", () => {
    testShip.hit(2);
    testShip.hit(4);
    expect(testShip.hits).toEqual([2,4]);
  })

  test("is Sunk? - True", () => {
    testShip.hit(0);
    testShip.hit(1);
    testShip.hit(2);
    testShip.hit(3);
    testShip.hit(4);
    expect(testShip.issunk()).toBe(true);
  })

  test("is Sunk? - False", () => {
    testShip.hit(1);
    testShip.hit(2);
    testShip.hit(3);
    expect(testShip.issunk()).toBe(false);
  })

})
