const sqlite3 = require('sqlite3');

async function deleteItem(db, item) {
  return new Promise((resolve, reject) => {
    db.run(
      `DELETE FROM todo_items 
      WHERE id = ?;`,
      [item.id],
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
  deleteItem
}