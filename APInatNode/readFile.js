const fs = require('fs');

fs.readFile('texto.txt', (err, data) => {
     
    if(err) throw err;

    console.clear();
    console.log(data.toString());
});



//Sincrona
const texto = fs.readFileSync('texto.txt');
console.log(`${texto}`)