import CoffeeMachine from "../src/CoffeeMachine";
import AmericanoMaker from "../src/AmericanoMaker";
import ExpressoMaker from "../src/ExpressoMaker";
import LatteMaker from "../src/LatteMaker";
import CappuccinoMaker from "../src/CappuccinoMaker";
import MocaccinoMaker from "../src/MocaccinoMaker";

describe('CoffeeMachine', () => {
  let coffeeMachine;

  beforeEach(() => {
    const makers = new Map();
    makers.set('AMERICANO', new AmericanoMaker());
    makers.set('ESPRESSO', new ExpressoMaker());
    makers.set('LATTE', new LatteMaker());
    makers.set('CAPPUCCINO', new CappuccinoMaker());
    makers.set('MOCACCINO', new MocaccinoMaker());

    coffeeMachine = new CoffeeMachine();
    coffeeMachine.makersMap = makers;
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

  it('should get cappuccino recipe', () => {
    const expected = { espresso: 1, milk: 1, foam: 1 };
    const actual = coffeeMachine.processRequest('CAPPUCCINO');

    expect(actual).toEqual(expected);
  });

  it('should get mocaccino recipe', () => {
    const expected = { espresso: 1, milk: 2, foam: 1, chocolate: 1 };
    const actual = coffeeMachine.processRequest('MOCACCINO');

    expect(actual).toEqual(expected);
  });
});
