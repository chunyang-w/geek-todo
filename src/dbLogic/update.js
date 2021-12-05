const sqlite3 = require('sqlite3');

async function updateItem(db, item, mark) {
  return new Promise((resolve, reject) => {
    db.run(
      `UPDATE todo_items 
      SET completed = ?
      WHERE id = ?;`,
      [mark, item.id],
      (err) => {
        if (err) {
          reject(err);
        } else {
          resolve()
        }
      }
    )
  })
}

module.exports = {
  updateItem
}