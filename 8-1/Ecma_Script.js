
// String Literals //
function result(name,designation) {
    console.log(`my name is ${name} ${designation}`)
}
result("akash", "accounts")

// Object Literals //

let employe = {
    name: "Akash",
    age: 18,
    de : function () {
        return  `my name is ${this.name} age ${this.age}`
    }
}
console.log(employe.de())

// Array Destructuring  //

let num =[1,2];
var [num1,num2] = num;
console.log(num1)

// Object Destructuring  //

let details = {
    name:"Akash",
    age:18
}

var {name,age} = details;
console.log(name)

// Default Parameters //

function resultt(a=10, b=20){
  console.log(a + b)
}
resultt(1,undefined)

// rest Operator //

function result (...num){
    console.log(num)
}
result(1,1,1)

//Spread Operator //

let data = [1,2,3];
let data1 = [2];
var num3 = [...data,...data1];

console.log(num3)

// Arrow Function 
arrow = (name) => {
    console.log(name)
}
arrow("akash")














