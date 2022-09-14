
const repl = require('repl');

repl.start({

    prompt: "입력_때_앞에_출력할_문자열"
    eval: (command, context, filename, callback) => {

        callback();
    }

})