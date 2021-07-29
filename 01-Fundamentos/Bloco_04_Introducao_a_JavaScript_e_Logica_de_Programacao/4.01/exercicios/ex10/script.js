let valorCusto = 100;
let valorVenda = 200;
let impostoSobreOCusto = valorCusto * 1.2;

lucroDeMil = (valorVenda - impostoSobreOCusto) * 1000;

if (valorCusto === 0 || valorVenda === 0) {
    console.log("Um dos valores é inválido");
}else {
    console.log(lucroDeMil);
}