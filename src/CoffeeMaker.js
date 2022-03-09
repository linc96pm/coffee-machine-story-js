class CoffeeMaker {
  makeEspresso() {
    return {
      espresso: 1,
    };
  }

  makeAmericano() {
    return {
      espresso: 1,
      water: 1,
    };
  }

  makeLatte() {
    return {
      espresso: 1,
      milk: 2,
      foam: 1,
    };
  }
}

export default CoffeeMaker;
