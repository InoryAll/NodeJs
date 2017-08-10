/*file.js*/
var fs=require('fs');
fs.readFile('1.jpg',function (error,origin_buffer) {
    fs.writeFile('1-1.jpg',origin_buffer,function (error) {
        if (error){
            console.log(error);
        }
    });
});