const checker = (number, randomNumber) => number === randomNumber;

const lottery = (number, callback) => {
    const randomNumber = Math.floor((Math.random() * 5) + 1);
    
    console.log(randomNumber);
    return callback(number, randomNumber) ? 'Parabains!' : "Hoje nãooo!";
};

console.log(lottery(3, checker));