// filter sempre retorna um array de mesmo tamanho ou menor

//filter(valor, indice, array)

//retorne os números maiores que 10:
const numeros = [5,50,9,45,1,2,78,13,15,44,6,6,9,2]

const numerosFiltrados = numeros.filter(callbackFilter);

function callbackFilter(valor){
    return valor>10
}


//retorne nomes que têm 5 ou menos letras
console.log(numerosFiltrados)
const nomes = ['José', 'Pablo','Lucas','abcdefgh','catarina','luca','ramo']
const nomesFiltrados = nomes.filter(nome=>nome.length<=5)
console.log(nomesFiltrados)

//retorne as pessoas cujo nome termina com a
const nomesTerminamComA = nomes.filter(nome =>nome.endsWith('a'))

console.log(nomesTerminamComA)


class Pessoa{
    constructor(nome,idade,genero){
        this.nome = nome
        this.idade = idade
        this.genero = genero
    }
} 

const eu = new Pessoa('Othávio',17,'M')
const irma = new Pessoa("Laura",12,'F')
const mae= new Pessoa('Lindelma',36,'F')
const pessoas = [eu ,irma ,mae ]
console.log(pessoas)

const menores = pessoas.filter(pessoa=>pessoa.idade<18)
    
console.log(menores)

