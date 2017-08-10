/*file_sync.js*/
var fs=require('fs');
var source=fs.readFileSync('1.jpg');
fs.writeFileSync('1-1-1.jpg',source);