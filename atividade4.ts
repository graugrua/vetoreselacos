const entrada4 = require("readline-sync");

 let nome : string[] = []; 

 for ( let i = 0; i < 5; i++){

    nome.push(entrada4.question("qual o nome ?: "))
 }
 nome.sort();

 console.log(nome);
 