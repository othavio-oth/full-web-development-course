// Revisando o básico em Arrays

//Construção
const lista = ['Carlos','João','Maria']
//const lista = new Array('Carlos','João','Maria')
console.log(lista)

//Adicionando elementos
lista.push('Mateus') // No fim
lista.unshift('Mario') //No início
console.log(lista)


//Selecionando uma parte do array

const novo = lista.slice(0,-2)
console.log(novo)


//Retirando elementos 4
lista.pop(); //No fim
lista.shift(); //No início
console.log(lista)

//Separar uma string
let nome = 'Othávio de Lima Sousa'
const nomes = nome.split(' ')
console.log(nomes)