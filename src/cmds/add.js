const { v4: uuid } = require('uuid')
const { createdPrompt } = require('../util/print')

module.exports =  function(args, db) {
  const todoItem = args._[1]
  if (todoItem) {
    db.run(`
    INSERT INTO todo_items (id, name, completed, created)
    VALUES (?, ?, ?, ?)`,
    [
      uuid(),
      todoItem,
      false,
      Date.now()
    ])
    console.log(createdPrompt)
    db.close()
  }
}