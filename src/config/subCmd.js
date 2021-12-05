module.exports = {
  optionConfig: {
    'all': {
      alias: 'a',
      type: 'boolean',
      describe: 'List all items',
      default: false,
    },
    'past': {
      alias: 'p',
      type: 'number',
      describe: 'Records of previous days',
      default: false,
    },
    'range': {
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