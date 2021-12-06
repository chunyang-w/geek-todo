#!/usr/bin/env node
const argv = require('yargs');

const sqlite3 = require('sqlite3')
const path = require('path')

const addItem = require('../src/cmds/add')
const globalOptions = require('../src/config/global')
const { init } = require('../src/init')
const { drawLogo } = require('../src/util/draw')
const { listItems, listOption } = require('../src/cmds/list')
const { checkItems, checkOption } = require('../src/cmds/check')
const { removeItems, removeOption } = require('../src/cmds/remove')

// const databasePath = path.resolve(__dirname ,'../database/todo.db')
// let db = new sqlite3.Database(databasePath)
// init(databasePath, db)

let db = init()

argv
  .command('$0', 'showLogo', () => {}, () => {
    drawLogo()
  })
  .command('add', 'Add TODO Item', () =>{}, (yargs) => {
    addItem(yargs, db)
  })
  .command('list [--all | --past | --range] [--help]', 'List TODO items', listOption, (yargs) => {
    listItems(yargs, db)
  })
  .command('done [--all | --past | --range] [--help]', 'Mark listed TODO items as done', checkOption, (yargs) => {
    checkItems(yargs, db, { mark: true })
  })
  .command('undone [--all | --past | --range] [--help]', 'Mark listed TODO items as undone', checkOption, (yargs) => {
    checkItems(yargs, db, { mark: false })
  })
  .command('remove [--all | --past | --range] [--help]', 'remove listed TODO items', removeOption, (yargs) => {
    removeItems(yargs, db)
  })
  .version(false)
  // .options(globalOptions)
  .argv
