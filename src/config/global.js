module.exports = {
  optionConfig: {
    'add': {
      alias: 'a',
      type: 'boolean',
      describe: 'List all items',
      default: false,
    },
    'list': {
      alias: 'ls',
      type: 'boolean',
      describe: 'List all items',
      default: false,
    },
    'done': {
      alias: 'd',
      type: 'boolean',
      describe: 'List all items',
      default: false,
    },
    'undone': {
      alias: 'ud',
      type: 'number',
      describe: 'Records of previous days',
      default: false,
    },
    'remove': {
      alias: 'r',
      type: 'string',
      describe: 'List item in specific range',
      default: false,
    },
    'help' : {
      alias: 'h'
    },
    'version' : {
      alias: 'v'
    }
  }
}