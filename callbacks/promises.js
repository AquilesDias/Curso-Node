function soma(x){
    return new Promise((resolve, reject) =>{
       setTimeout(() =>{
          resolve(x + 50);
       });
    });
}

soma(50).then((resultado)=>{
    console.log(`final: ${resultado}`)
});