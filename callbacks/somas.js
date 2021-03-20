function soma(valor, callback){
    return setTimeout(() => {
      return callback(null, valor + 100);
      console.log('estou no callback')
    }, 3000);
}

//Callback
function resolveSoma(err, resultado){
    if(err) throw err;
    console.table(resultado);
}

soma(100, resolveSoma)


// quando uma função é passada como um argumento de outra,
// ela é, então, chamada de callback. 
// Todo callback tem pelo menos dois paramentros