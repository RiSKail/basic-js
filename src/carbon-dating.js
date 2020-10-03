const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof (sampleActivity) !== "number" || typeof (sampleActivity) !== "string" || arguments == undefined)
    return false;
  else {
    let k = 0.693 / HALF_LIFE_PERIOD;
    return (Math.log(MODERN_ACTIVITY / +sampleActivity) / Math.log(10)) / k;
  }
};
