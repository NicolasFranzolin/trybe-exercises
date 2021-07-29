// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
let list = [];

for (let i = 1; i < 26; i += 1) {
    list.push(i);
}

for (let index = 0; index < list.length; index += 1) {
    console.log(list[index] / 2);
}