const fs = require('fs');

console.log((process.hrtime()[0]/60).toFixed(5));
console.log("before reading file ");

const dados = fs.readFileSync("name-file");

console.log('after of read file');
console.log((process.hrtime()[0]/60).toFixed(5));