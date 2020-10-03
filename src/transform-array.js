module.exports = function transform(arr) {
  if (!(arr) || arguments == undefined) throw new Error("Error");
  let flag = false;
  let tempArr = [];
  arr.forEach(function (item, i, arr) {
    switch (item) {
      case "--double-next":
        if (i != arr.length - 1){
        tempArr.push(arr[i+1]);
        }
        break;
      case "--double-prev":
        if (flag == true) {
          flag = false;
          break;
        }
        if (i != 0){
        tempArr.push(arr[i-1]);
        }
        break;
      default:
        if (item == "--discard-next") {
          flag = true;
          break;
        }
        if (flag == true && arr[i+1] == "--double-prev") break;
        if (arr[i+1] != "--discard-prev" && flag !== true && item != "--discard-prev"){
            tempArr.push(item);
        } else {
          flag = false;
        }
        break;
    }

  });
  return tempArr;
};
