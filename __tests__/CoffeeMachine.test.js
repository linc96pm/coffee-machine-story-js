import CoffeeMachine from "../src/CoffeeMachine";

describe('CoffeeMachine', () => {
  let coffeeMachine;

  beforeEach(() => {
    coffeeMachine = new CoffeeMachine();
  });

  it('should get americano recipe', () => {
    const expected = { espresso: 1, water: 1 };
    const actual = coffeeMachine.processRequest('AMERICANO');

    expect(actual).toEqual(expected);
  });

  it('should get espresso recipe', () => {
    const expected = { espresso: 1 };
    const actual = coffeeMachine.processRequest('ESPRESSO');

    expect(actual).toEqual(expected);
  });

  it('should get latte recipe', () => {
    const expected = { espresso: 1, milk: 2, foam: 1, };
    const actual = coffeeMachine.processRequest('LATTE');

    expect(actual).toEqual(expected);
  });

  it('should throw error when recipe is unknown', () => {
    expect(() => coffeeMachine.processRequest('TEA')).toThrowError(new Error('Wrong Request'));
  });

  xit('should get cappuccino recipe', () => {
    const expected = { espresso: 1, milk: 1, foam: 1 };
    const actual = coffeeMachine.processRequest('CAPPUCCINO');

    expect(actual).toEqual(expected);
  });

  xit('should get mocaccino recipe', () => {
    const expected = { espresso: 1, milk: 2, foam: 1, chocolate: 1 };
    const actual = coffeeMachine.processRequest('MOCACCINO');

    expect(actual).toEqual(expected);
  });
});
