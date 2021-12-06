/*
 * @Author: your name
 * @Date: 2021-12-06 09:53:06
 * @LastEditTime: 2021-12-06 12:55:34
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \geek-todo\src\cmds\add.js
 */
const { v4: uuid } = require('uuid')
const { createdPrompt } = require('../util/print')

module.exports =  function(args, db) {
  // console.log(args)
  const todoItem = args._.slice(1).join(' ')
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