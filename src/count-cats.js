module.exports = function countCats(matrix) {
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    matrix[i].forEach(function (item, i, arr) {
      if (item == "^^") count++;
    });
  }
  return count;
};
