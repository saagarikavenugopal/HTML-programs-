let name = "John";
let age = 50;
let sentence = `Hi ${name}, how are you? You are ${age} years old.`;
console.log(sentence);
console.log(name);
console.log(age);

// ARRAY IN JS
let fruits = ["apple","orange","kiwi"];
// Array is an set of elements which is having an index
//the index count starts from 0
let result= fruits[1];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
// what is the length of the array 
//length of the array = last index+1
//OBJECT
//I need a key value pair for creating the object
//it is a collection of data
let student={
    name:"John",
    age: 20,
    school: "chaitanya"
};

console.log(student.name);
console.log(student.age);
console.log(student.school);

console.log(typeof "hello");
console.log(typeof 27);
console.log(typeof true);

let school = "chaitanya";
console.log(typeof (school));

//FUNCTION
//It is a reusable block of code 
//3 ways we can write a function

//method-1 function declaration
// FUNCTION
// it is a reusable block of code
//3 ways we can write a function
// method 1-> function declaration
function greet(){
    return "hello world";
}
console.log(greet());
 
function additionDeclaration(x,y){
    return "The sum is: " + (x + y);
}
console.log(additionDeclaration(2,3));

// method 2 --> the function is stored inside the variable
let additionExpression = function(x,y){
    return x+y;
}
console.log(additionExpression(4,5));

//method 3-->Arrow function
let additionArrow = (x,y) => x+y; //single expression ( 2 parameter)
let square = x => x*x; // single parameter
let sayHi = () => "helloo"; //no ConnectionParameters(empty parameter)
let Tax = (p, r)=>{
    return p+r;
};
 
//Default parameters
function greetUser(name = "Guest"){
    return `welcome ${name}`;
}
console.log(greetUser());//welcome Guest
console.log(greetUser("Maria"));//welcome Maria

