// A tupla seria um array com tipos bem especificos e tamanho fixo

const dadosCliente: [number, string] = [1, "Danilo"]; // Isso faz com que meu índice 0 seja um number e meu índice 1 seja uma string
const dadosCliente2: [number, string, string] = [1, "Danilo", "Leal"];
const dadosCliente3: [number, string, string?] = [1, "Danilo"]; // Não é necessario adicionar o índice 2 pois ele é opcional
const dadosCliente4: [number, string, ...string[]] = [1, "Danilo", "Fulano", "Da", "Fila", "Do", "Nikeses"]; // Isso faz com que os indices após o 1 seja todos strings
const dadosCliente5: readonly [number, string, ...string[]] = [1, "Danilo", "Fulano", "Da", "Fila", "Do", "Nikeses"]; // Readonly faz com que nenhum valor possa sera alterado/adicionado/removido

dadosCliente[0] = 2;
// dadosCliente[0] = "string"; // Não é possivel fazer isso pois meu índice 0 tem que ser do tipo number

// dadosCliente5[1] = "Luiz"; // Não posso mudar o valor pois é readonly
// dadosCliente5.pop(); // Não posso remover meu último valor pois é readonly
// dadosCliente5.push(); // Não posso adicionar valor pois é readonly

console.log(dadosCliente);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);
console.log(dadosCliente5);
