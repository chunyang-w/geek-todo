const CFonts = require('cfonts')

function drawLogo() {
  CFonts.say('GEEK TODO', {
    font: 'tiny', 
    align: 'center',
    gradient: ['green', '#55ff55']

  })
}

function welcome() {
  CFonts.say('WELCOME', {
    font: 'tiny', 
    align: 'center',
    color: 'white'
  })
}

module.exports = {
  welcome,
  drawLogo
}