/*
 * @Author: your name
 * @Date: 2021-12-06 09:53:06
 * @LastEditTime: 2021-12-06 11:15:15
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \geek-todo\src\init.js
 */
const fs = require('fs')
const path = require('path')
const { initPrompt, initComplete } = require('../src/util/print')
const { drawLogo, welcome } = require('../src/util/draw')
const sqlite3 = require('sqlite3')

function init() {
  // console.log(databasePath)
  let db
  const databaseFolder = path.resolve(__dirname ,'../database')
  const databasePath = path.resolve(__dirname ,'../database/todo.db')
  if (!fs.existsSync(databaseFolder)) {
    console.log(initPrompt)
    fs.mkdirSync(databaseFolder ,{ recursive: false })
    fs.writeFileSync(databasePath, '')
    db = new sqlite3.Database(databasePath)
    db.serialize(() => {
      db.run( 'CREATE TABLE IF NOT EXISTS todo_items (\
                id VARCHAR(36),\
                name VARCHAR(255),\
                completed BOOLEAN,\
                created DATETIME\
              )'
      )
    })
    console.log(initComplete)
    welcome()
    // drawLogo()
  } else {
    db = new sqlite3.Database(databasePath)
  }
  return db
}

module.exports = {
  init
}