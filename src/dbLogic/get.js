const { getTimeBoundary } = require('../util/time')

async function getItems(db, list, sql, vars) {
  return new Promise((resolve, reject) => {
    list.length = 0
    db.all(sql, vars, (err, res) => {
      handleItems(err, res, resolve, reject, list)
    })
  })
}

function handleItems(err, res, resolve, reject,list) {
  if (err) {
    reject(err)
  } else {
    res.forEach((elem) => {
      list.push(elem)
    })
    resolve()
  }
}

async function getItemsByArgs(args, db, todoList) {
  const now = new Date().getTime()
  let small, big
  if (args.all) {
    small = 0, big = Infinity
  } else if (args.past) {
    [small, big] = getTimeBoundary(now, args.past, args.past)
  } else if (args.range) {
    // console.log('in range, args: ', args.range)
    const [start, end] = args.range.split('-').map(Number);
    // console.log(start, end);
    [small, big] = getTimeBoundary(now, start, end)
    // console.log(new Date(small).toLocaleString(), new Date(big).toLocaleString())
  } else {
    [small, big]= getTimeBoundary(now, 0, 0)
  }
  // console.log(small,big)
  await getItems(db,
    todoList,
    `SELECT * FROM todo_items WHERE
     created BETWEEN ? AND ?;`,
    [small, big]
  )
}

module.exports = {
  getItems,
  getItemsByArgs
}