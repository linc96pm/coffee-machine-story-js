import CoffeeMaker from "./CoffeeMaker";

class CoffeeMachine {
  constructor(props) {
    this.coffeeMaker = new CoffeeMaker();
  }

  processRequest(request) {
    switch (request) {
      case 'AMERICANO':
        return this.coffeeMaker.makeAmericano();
      case 'ESPRESSO':
        return this.coffeeMaker.makeEspresso();
      case 'LATTE':
        return this.coffeeMaker.makeLatte();
      default:
        throw new Error('Wrong Request');
    }
  }
}

export default CoffeeMachine;
