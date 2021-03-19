const fs = require('fs');

console.log((process.hrtime()[0]).toFixed(5))

const dados = fs.readFile('name-file', (err, data) => {

    if(err) throw err;
    console.log('I finish');
});

console.log('after file');
console.log((process.hrtime()[0]).toFixed(5));