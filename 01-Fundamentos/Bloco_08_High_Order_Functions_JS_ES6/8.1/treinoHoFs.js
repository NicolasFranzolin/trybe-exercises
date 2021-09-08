// Escrever uma HoF que recebe dois parametros, o primeiro é número de unidades do quadrado e o segundo a função que faz o quadrado.

const criaQuadrado = (n, symbol) => {
    let inputLine = '';
    
    for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
      inputLine = inputLine + symbol;
    };
    for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
      console.log(inputLine);
    };
}


const quadrado = (lado, callback) => {
    callback(lado, '*');
};

quadrado(4, criaQuadrado);



