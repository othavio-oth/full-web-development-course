//Usando o método concat
const a1=[1,2,3]
const a2 = [4,5,6]

var a3= a1+a2;
console.log(typeof a3,a3)

a3 = a1.concat(a2)

console.log(typeof a3,a3)

//usando ... spread
const a4 = [...a1,...a2]
console.log(typeof a4,a4)