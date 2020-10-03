const chainMaker = {
  str: [],

  getLength() {
    return this.str.length;
  },

  addLink(value) {
    this.str.push(value);
    return this;
  },

  removeLink(position) {
    if (isNaN(+position) ||
      !Number.isInteger(position) ||
      position >= this.str.length
    ) {
      this.str = [];
      throw new Error();
    }
    this.str.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.str.reverse();
    return this;
  },

  finishChain() {
    let chained = this.str.map((value, i) => i === 0 ? `( ${value} )` : `~~( ${value} )`).join('');
    this.str = [];
    return chained;
  }
};

module.exports = chainMaker;
