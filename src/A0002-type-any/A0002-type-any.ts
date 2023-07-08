/* UTILIZE ANY APENAS EM ÚLTIMO CASO */
// Basicamente any representa uma falta de tipo, any pode ser qualquer tipo

function showMessage(msg: any) { // Aqui msg pode ser qualquer tipo, um number, uma string, qualquer coisa
	return msg;
} // Nessa função não foi colocado o ": type" porque o TypeScript infere automaticamente o tipo que será retornado (Passe o mouse em cima)
