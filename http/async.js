/*async.js*/

function learn(c) {
    console.log(c);
}

function web(callback,c) {
    setTimeout(function () {
        c++;
        callback(c);
    },1000);
}

web(learn,0);