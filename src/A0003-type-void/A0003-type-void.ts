// O tipo void quer dizer que uma função ou um método não retorna nada

function semRetorno(...args: string[]): void { // Args vai ser uma array de string
	console.log(args.join(", "));
}

semRetorno("Yo", "Soy", "Lindo");
