// 1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false , use some ;

const names = ['Mateus', 'José', 'Walace', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
  return arr.some((xablau) => xablau === name);
}

console.log(hasName(names, 'Ana'));

// 2 - Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false , use every ;

const people = [
    { name: 'Mateus', age: 19 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  

// const numbers = [14, 13, 13 , 14, 15, 18]

  const verifyAges = (arr, minimumAge) => {
    //Adicione seu código aqui
    return arr.every((xablau) => xablau.age >= minimumAge);
  }
  
  console.log(verifyAges(people, 18));