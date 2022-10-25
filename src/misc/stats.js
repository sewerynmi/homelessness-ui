/* Calculate previous period */
const calculatePreviousPeriod = (curPeriod, curYear) => {
  let prevPeriod = { period: '', year: curYear };
  const periods = ['jan-mar', 'apr-jun', 'jul-sept', 'oct-dec'];
  let curPeriodId = periods.findIndex((cp) => cp == curPeriod);

  if (curPeriodId == 0) {
    prevPeriod.period = periods[3];
    prevPeriod.year = curYear - 1;
  } else {
    prevPeriod.period = periods[curPeriodId - 1];
  }
  return prevPeriod;
};

const calculatePercentageDiffBetweenValues = (val1, val2) => {
  return ((val2 - val1) / val1) * 100;
};

module.exports.calculatePreviousPeriod = calculatePreviousPeriod;
module.exports.calculatePercentageDiffBetweenValues = calculatePercentageDiffBetweenValues;
