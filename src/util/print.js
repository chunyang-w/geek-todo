const { rgb } = require('chalk')
const chalk = require('chalk')

const createdPrompt = chalk.green('⚙️  Item created')
const invalidInput = chalk.white('🚫  Invalid input')
const initPrompt = chalk.bgCyan('🛠  Initializing TODO CLI...')
const initComplete = chalk.bgCyan('💎  Setup complete!')

function checkPrompt(range) {
  let prompt = ''
  if (range[0] === 0) {
    prompt = prompt + chalk.red('Dont have any items yet')
  } else {
    prompt = prompt + chalk.green('Items to be selected: ')
    prompt = prompt + chalk.italic('(No.' + range[0] + (range[1] !== 1 ? '~' + range[1] : '') + ' available): ')
  }
  return prompt
}

function prettyLine(index, str, status, itemAmount) {
  // const isDone = status !== 0 ? chalk.green('done') : chalk.red('pending')
  const isDone = status === 0 ?
    '⌛️ ' + chalk.red('open'): ' ' + chalk.green('done')
  const sapceNeeded = String(itemAmount).length
  // console.log('pretty line, space needed: ', sapceNeeded)
  const idxStringList = String(index + 1).split('')
  idxStringList.push('.')
  for (let i = 0; i < sapceNeeded - idxStringList.length + 1; i++) {
    idxStringList.push(' ')
  }
  return (
    chalk.yellow(idxStringList.join(''))
    + isDone
    + ' '
    + chalk.bold(str))
}

module.exports = {
  initPrompt,
  initComplete,
  invalidInput,
  createdPrompt,
  checkPrompt,
  prettyLine
} 
