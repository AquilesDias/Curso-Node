function soma(x){
    return new Promise((resolve, reject) =>{

        if(typeof x != 'number' || Number(x) === NaN || Number(x) === undefined){
            reject('numero estranho....')
        }
       setTimeout(() =>{
          resolve(x + 50);
       }, 2000);
    });
}

async function main(){

    try {
        const resultado = await soma();
        console.log(`O resultado foi : ${resultado}`)
    } catch (error) {
        console.log(`Algo deu errado ${error}`)
    }
}

main();