const { optionConfig } = require('../config/subCmd')
const { listAndHandle } = require('../util/prompt')
const { updateItem } = require('../dbLogic/update')

function checkItems(args, db, payload) {
  listAndHandle(args, db, handleCheck, payload)
}

async function handleCheck(db, todoList, idx, payload) {
  // find id by index
  let target = todoList[idx - 1]
  await updateItem(db, target, payload.mark)
  // console.log(target)
}

function checkOption(yargs) {
  return yargs.options(optionConfig)
}

module.exports = {
  checkItems,
  checkOption
}