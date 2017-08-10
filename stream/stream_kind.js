/*stream_kind.js*/
var readable=require('stream').Readable;
var writable=require('stream').Writable;

var readStream=new readable();
var writeStream=new writable();

readStream.push('i');
readStream.push('like');
readStream.push('it');
readStream.push(null);

writeStream._write=function (thunk,encode,cb) {
    console.log(thunk.toString());
    cb();
};

readStream.pipe(writeStream);