/*callback.js*/

function learn(c) {
    console.log(c);
}

function web(callback,c) {
    console.log('c is : ');
    callback(c);
}

web(learn,0);