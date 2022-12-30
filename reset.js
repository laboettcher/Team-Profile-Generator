// Resets the html generator by removing the previously generated file from the dist folder

const fs = require('fs');
if (fs.existsSync('./dist/index.html')) {
  fs.unlinkSync('./dist/index.html');
}
