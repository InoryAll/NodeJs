/*stream_mine.js*/
var stream=require('stream');
var util=require('util');

function ReadStream() {
    stream.Readable.call(this);
}
util.inherits(ReadStream,stream.Readable);
ReadStream.prototype._read=function () {
    this.push('i');
    this.push('like');
    this.push('it');
    this.push(null);
};

function WriteStream() {
    stream.Writable.call(this);
}
util.inherits(WriteStream,stream.Writable);
WriteStream.prototype._write=function (chunk,encode,cb) {
  console.log(chunk.toString());
  cb();
};

function TransformStream() {
    stream.Transform.call(this);
}
util.inherits(TransformStream,stream.Transform);
TransformStream.prototype._transform=function (chunk,encode,cb) {
  this.push(chunk);
    cb();
};
TransformStream.prototype._flush=function (cb) {
  this.push('really?');
  cb();
};

var rs=new ReadStream();
var ws=new WriteStream();
var ts=new TransformStream();

rs.pipe(ts).pipe(ws);