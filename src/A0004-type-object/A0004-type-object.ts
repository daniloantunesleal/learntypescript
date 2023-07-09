const objectA = {
	chaveA: "Valor A",
	chaveB: "Valor A"
}; // Aqui não precisei inferir o tipo pois o próprio TypeScript já inferiu (Passe o mouse em cima)

objectA.chaveA = "adsad";
// objectA.chaveC = "Novo Valor"; // Não é possivel criar uma nova chaveC pois o TypeScript já inferiu que existe apenas chaveA do tipo string e chaveB do tipo string, e não existe chaveC do tipo string.


// Para conseguir criar uma nova chaveC:
const objectB: { chaveA: string, chaveB: string, chaveC?: string } = {
	chaveA: "Valor A",
	chaveB: "Valor A"
}; // Aqui EU inferi o tipo

objectA.chaveA = "dasda";
objectB.chaveC = "Novo Valor"; // Assim é possivel criar uma nova chaveC pois eu inferi que a chaveC pode ser opcional (pode exister ou não) e que ela é do tipo string


// Outra forma de criar outras chaves:
const objectC: {
    chaveA: string,
    chaveB: string,
    [key: string]: unknown // Isso faz com que eu possa criar qualquer outras chaves do tipo string e valor do tipo unknown
} = {
	chaveA: "Valor A",
	chaveB: "Valor A"
}; // Aqui EU inferi o tipo

objectA.chaveA = "dasda";
objectC.chaveC = "Novo Valor C";
objectC.chaveD = "Novo Valor D";
objectC.chaveE = "Novo Valor E";

// Dessa forma, qualquer outra chave que eu adicionar ao decorrer do código o TypeScript não vai saber mais


// Readonly:
const objectD: { readonly chaveA: string, chaveB: string } = { // Readonly faz com que eu não possa mais alterar o valor da minha chave
	chaveA: "Valor A",
	chaveB: "Valor A"
}; // Aqui EU inferi o tipo

// objectD.chaveA = "dasda"; // Não é possivel mudar o valor pois estou usando readonly
objectD.chaveB = "Novo Valor"; // É possivel mudar o valor pois não está usando readonly
