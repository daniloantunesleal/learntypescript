/*
O tipo never quer dizer que a função nunca vai retornar nada

Dois exemplos queeu consigo imaginar:
- Um laço infinito;
- Ou o mais comum: um erro;
*/

function criaErro(): never {
	throw new Error("ERRO QUALQUER");
}

criaErro();
