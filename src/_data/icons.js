const fs = require('fs');
const path = require('path');
const { chess } = require('./characters');

function readSvgFile(filename) {
  const filePath = path.join(__dirname, '..', '_includes', 'icons', filename);
  return fs.readFileSync(filePath, 'utf8');
}

module.exports = {
  currency: readSvgFile('currency.svg'),
  math: readSvgFile('math.svg'),
  scriptNumbers: readSvgFile('script-numbers.svg'),
  fractions: readSvgFile('fractions.svg'),
  legal: readSvgFile('legal.svg'),
  punctuation: readSvgFile('punctuation.svg'),
  arrows: readSvgFile('arrows.svg'),
  diacritics: readSvgFile('diacritics.svg'),
  ligatures: readSvgFile('ligatures.svg'),
  weather: readSvgFile('weather.svg'),
  keyboard: readSvgFile('keyboard.svg'),
  misc: readSvgFile('misc.svg'),
  chess: readSvgFile('chess.svg')
}; 