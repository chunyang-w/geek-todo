const { number } = require("yargs")

function isInValidRange(range, ans) {
  // console.log(range,ans)
  // console.log(typeof ans)
  if (!isInt(ans)) {
    return false
  }
  if (!(range[0] <= ans && ans <= range[1])) {
    return false
  }
  return true
}

function isValidRange(start, end) {
  if ((isInt(start) && isInt(end))
  && Number(start) <= Number(end)) {
    return true
  }
}

function isInt(num) {
  num = Number(num)
  if (!Number.isNaN(num) && Number.isInteger(num)){
    return true
  } else return false
}

module.exports = {
  isInt,
  isInValidRange,
  isValidRange,
}