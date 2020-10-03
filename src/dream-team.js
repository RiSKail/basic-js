function alphabetize(str) {
  return str.toLowerCase().split('').sort().join('').toUpperCase();
}

module.exports = function createDreamTeam(members) {
  if (!(members && members.length) || arguments == undefined)
    return false;
  else {
    let name = "";
    members.forEach(function (item, i, arr) {
      if (typeof (item) == "string") {
        let str = item.split(' ').join('');
        name += str[0];
      }
    });
    return alphabetize(name);
  }
};
