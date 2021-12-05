const { v4: uuid } = require('uuid')
const { optionConfig } = require('../config/subCmd')
const { prettyLine } = require('../util/print')
const { getItemsByArgs } = require('../dbLogic/get')

async function listItems(args, db) { 
  const todoList = []
  // console.log('In list.js: listItems, args: ', args)
  // console.log(args.argv)
  await getItemsByArgs(args, db, todoList)
  const itemAmount = todoList.length
  todoList.forEach((todo, idx) => {
    console.log(prettyLine(idx, todo.name, todo. completed, itemAmount))
  })
  db.close()
  // process.exit(0)
  // console.log(todoList)
}

function listOption(yargs) {
  return yargs.options(optionConfig)
}

module.exports = {
  listItems,
  listOption
}