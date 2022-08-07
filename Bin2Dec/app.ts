const readline = require('readline')


console.log("Hello!");
console.log("Do you want to convert a binary number to its equivalent decimal?");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Who are you?', (name: string) => {
    console.log(`Hey there ${name}!`);
    readline.close();
  });


