module.exports = class DepthCalculator {
  calculateDepth(arr, level = 1) {
    let maxDepth = 0;
    arr.forEach(element => {
      if (Array.isArray(element)) maxDepth = this.calculateDepth(arr.flat(), level + 1);
    });
    return (maxDepth > level) ? maxDepth : level;
  }
};