const { getItemsByArgs } = require('../dbLogic/get')
const readline = require('readline')
const { prettyLine, checkPrompt, invalidInput } = require('../util/print')
const { isInValidRange } = require('../util/validate')
const { parseInput } = require('../util/parseInput')

async function listAndHandle(args, db, handler, payload) { 
  let itemAmount, range
  const todoList = []
  const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  await getItemsByArgs(args, db, todoList)
  itemAmount = todoList.length
  todoList.forEach((todo, idx) => {
    console.log(prettyLine(idx, todo.name, todo. completed,itemAmount))
  })

  range = todoList.length === 0 ? [0, 0] : [1, todoList.length]
  input.question(checkPrompt(range), async (ans) => {
    const inputList = parseInput(ans)
    // console.log('*',inputList)
    inputList.forEach(async (id) => {
      if(isInValidRange(range, id)) {
        await handler(db, todoList, id, payload)
      } else {
        console.log(invalidInput)
      }
    })
    input.close()
    db.close()
    // if (isInValidRange(range, Number(ans))) {
    //   await handler(db, todoList, ans)
    // } else {
    //   console.log(invalidInput)
    // }
    // input.close()
    // db.close()
  })
}

module.exports = {
  listAndHandle
}