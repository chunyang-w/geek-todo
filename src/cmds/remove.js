const { listAndHandle } = require('../util/prompt')
const { deleteItem } = require('../dbLogic/delete')
const { optionConfig } = require('../config/subCmd')

function removeItems(args, db) {
  listAndHandle(args, db, handleDelete)
}

async function handleDelete(db, todoList, idx) {
  // find id by index
  let target = todoList[idx - 1]
  await deleteItem(db, target)
  // console.log(target)
}

function removeOption(yargs) {
  return yargs.options(optionConfig)
}

module.exports = {
  removeItems,
  removeOption
}