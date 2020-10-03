module.exports = function repeater(str, options) {
  let tempStr = '';
  if (options.repeatTimes == undefined) {
    return str + options.addition;
  }
  for (let i = 0; i < options.repeatTimes; i++) {
    tempStr += str;
    if (options.additionRepeatTimes != undefined) {
      for (let j = 0; j < options.additionRepeatTimes; j++) {
        if (j == options.additionRepeatTimes - 1) {
          tempStr += options.addition;
        } else {
          tempStr += (options.addition + options.additionSeparator);
        }
      }
    }
    if (i != options.repeatTimes - 1)
      (options.separator == undefined) ? tempStr += "+" : tempStr += options.separator;
  }
  return tempStr;
};
