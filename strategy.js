class FilterStrategy {
  removeValue(data) {
    throw new Error("This method must be overwritten!");
  }
}

class RemoveNegativeStrategy extends FilterStrategy {
  removeValue(data) {
    return data > 0;
  }
}

class RemoveOddStrategy extends FilterStrategy {
  removeValue(data) {
    return data % 2 !== 0;
  }
}

class Values {
    constructor(data) {
        this.data = data;
    }
    
    filter(strategy) {
        return this.data.filter(strategy.removeValue);
    }
}

const values = new Values([-1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log(values.filter(new RemoveOddStrategy()));

