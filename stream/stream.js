/*stream.js*/
var fs=require('fs');
var readStream=fs.createReadStream('1-1.jpg');
var writeStream=fs.createWriteStream('2.jpg');

readStream.on('data',function (thunk) {
    if (writeStream.write(thunk) === false){
        readStream.pause();
        console.log('pause');
    }
    else{
        console.log('read');
    }
}).on('end',function () {
    writeStream.end();
    console.log('end');
});

writeStream.on('drain',function () {
    readStream.resume();
    console.log('resume');
});