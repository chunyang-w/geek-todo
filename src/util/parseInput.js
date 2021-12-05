const { isValidRange, isInt } = require('../util/validate')

function parseInput(input) {
  // console.log('in parseInput, input:', input)
  const idxArr = []
  const allSegment = input.split(',')
  // console.log('all segment:', allSegment)
  allSegment.forEach((segment) => {
    if ([].includes.call(segment, '-')) {
      // console.log('- catched')
      const [start, end] = segment.split('-')
      if (isValidRange(start, end)) {
        for (let i = Number(start); i <= Number(end); i++) {
          idxArr.push(i)
        }
      }
    } else {
      if (isInt(segment)) {
        idxArr.push(Number(segment))
      }
    }
  })
  const res = Array.from(new Set(idxArr)).sort()
  // console.log('parse complete: ', res)
  return res
}



module.exports = {
  parseInput
}