class CoffeeMachine {
  _makersMap = new Map();

  processRequest(request) {
    if (this._makersMap.has(request)) {
      return this._makersMap.get(request).make()
    } else {
      throw new Error('Wrong Request');
    }
  }

  get makersMap() {
    return this._makersMap;
  }

  set makersMap(value) {
    this._makersMap = value;
  }
}

export default CoffeeMachine;
