/* eslint-disable */

// Tipos básicos (aqui ocorre inferência de tipos)
let nome: string = "Luiz"; // Qualquer tipo de strings: '' "" ``
let idade: number = 30; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = false; // true ou false
let simbulo: symbol = Symbol("qualquer-symbol"); // symbol
// let big: bigint = 10n; // bigint

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3, 4];
let arrayDeStrings: Array<string> = ["a", "b", "c", "d"];
// De outra forma:
let arrayDeNumeros2: number[]= [1, 2, 3, 4];
let arrayDeStrings2: string[] = ["a", "b", "c", "d"];

// Objetos
let pessoa: { nome: string, idade: number, adulto?: boolean } = { // chave? = A "?" deixa a chave opcional
    nome: "Danilo",
    idade: 21
    // Não é necessário responder o campo adulto pois ele é opcional
}

// Funções
function soma(x: number, y: number): number{ // O ":" depois dos parametros significa oque a função vai retornar
    return x + y;
}
const soma2: (x: number, y: number) => number = (x, y) => x + y; // ATENÇÃO: O valor só vem depois do sinal =, oque está vindo antes é o tipo
