import { adder } from './adder.js';

describe('adder tests', () => {
  test('adds 1, then 2, then 4, should equal 7', () => {
    const myAdder = adder();
    myAdder(1);
    myAdder(2);
    myAdder(4);
    expect(myAdder()).toEqual(7);
  }); 

  test('adds nothing, should return 0', () => {
    const myAdder = adder();
    expect(myAdder()).toEqual(0);
  });

  test('adders are independent', () => {
    const myAdder = adder();
    const anotherAdder = adder();
    myAdder(1);
    anotherAdder(2);
    expect(myAdder()).not.toEqual(anotherAdder());
  });
})
