const DAY_IN_SEC = 1000 * 60 * 60 * 24 // 1 * s/min * min/h * h/day

function getTimeBoundary(time, start, end) {
  // console.log('in getTimeBoundary:', time, start, end)
  const cur = new Date(time) // cur: current time
  const curString = cur.toLocaleDateString('en-US')
  const [month, day, year] = curString.split('/')
  const curMidNight = new Date(new Date(year, month - 1, day).getTime() + DAY_IN_SEC) // monthIndex = month - 1
  const small = curMidNight.getTime() - (end + 1) * DAY_IN_SEC
  const big = curMidNight.getTime() - start * DAY_IN_SEC - 1
  // console.log('time bound res:', [small, big])
  return [small, big]
}

module.exports = {
  getTimeBoundary
}