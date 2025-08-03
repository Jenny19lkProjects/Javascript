let DoubleQuoteSr="Esto es un string";
console.log(DoubleQuoteSr);
let singleQuoteString='Esto es otro string';
console.log(DoubleQuoteSr);

let message="con + Hola";

let singleQuoteString2='Esto es otro string ' + message;
console.log(singleQuoteString2);
/*propiedades valores como tal y metodo algo que se va ha ejecutar */
console.log("Mensaje lenght :" +message.length);

let message2="Hola!"
console.log(message2.toUpperCase());
/*Esto es para incluir si tiene la palabra message para buscar*/
console.log(message2.includes("la"));

let message3="Hola! hola hola patata";
console.log(message3.replaceAll("hola","adios"));
console.log(message3.trim());