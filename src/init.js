const fs = require('fs')
const path = require('path')
const { initPrompt, initComplete } = require('../src/util/print')
const { drawLogo, welcome } = require('../src/util/draw')
// const sqlite3 = require('sqlite3')

module.exports = function init(databasePath, db) {
  // console.log(databasePath)
  if (!fs.existsSync(databasePath)) {
    console.log(initPrompt)
    console.log(initComplete)
    welcome()
    // drawLogo()
    db.serialize(() => {
      db.run( 'CREATE TABLE IF NOT EXISTS todo_items (\
                id VARCHAR(36),\
                name VARCHAR(255),\
                completed BOOLEAN,\
                created DATETIME\
              )'
      )
      db.close()
    })
  }
}