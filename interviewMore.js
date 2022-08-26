// 1. What’s the difference between map, foreach, filter?

const numbers = [1,3,4,6];

// const numberMap = numbers.map(number => number+2); //map can return an array
// console.log(numberMap);

// const numberForEach = numbers.forEach(number => number+2); //return undefined
// console.log(numberForEach);

// numbers.forEach(number => console.log(number+2));

// 2. What’s the difference between filter and find?

// const numberFilter = numbers.filter(number => number>2); // use condition to get new array according to the conditon
// console.log(numberFilter);

// const numberFind = numbers.find(number => number>2); // use condition to get first match value
// console.log(numberFind);


// 3. What is the difference between for..of and for..in?

// Both for...in and for...of statements iterate over something. The main difference between them is in what they iterate over.

// The for...in statement iterates over the enumerable properties of an object.

// The for...of statement iterates over values that the iterable object defines to be iterated over.

// const object = { a: 1, b: 2, c: 3 };

// for (const property in object) {
//   console.log(`${property}: ${object[property]}`);
// }

// for(const number in numbers){
//     console.log(number);            //return index
// }
// for(const number in numbers){      // return value
//     console.log(number);
// }


// 4. How do you empty an array?

// console.log(numbers)
// // numbers.length=0;
// // numbers.splice(0,numbers.length);
// while(numbers.length>0){
//     numbers.pop();
// }
// console.log(numbers)


// 5. Difference between class and object.

// class Department{
//     constructor(name,student){
//         this.name=name;
//         this.student=student;
//     }
//     result(){
//         return `${this.name} department result is good`;
//     }
// }
// class Cse extends Department{
//     constructor(name,floor,student){
//         super(name,student);
//         this.floor=floor;
//     }
//     allFloor(clean){
//         return `${clean} is clean`;
//     }
// }
// const cse = new Cse('cse','third',100);
// const cse2 = new Cse('cse','fourth',200);
// console.log(cse,cse.result());
// console.log(cse2,cse2.result(),cse2.allFloor('this floor'));


// 6. What is a Prototype chain? Or how does inheritance work in JavaScript?

// Each object has a private property which holds a link to another object called its prototype.


// Prototypal inheritance uses the concept of prototype chaining. Let’s explore that concept. Every object created contains [[Prototype]], which points either to another object or null. Envision an object C with a [[Prototype]] property that points to object B. Object B’s [[Prototype]] property points to prototype object A. This continues onward, forming a kind of chain called the prototype chain.

// This concept is used when searching our code. When we need to find a property in an object, it is first searched for in the object, and if not found, it is searched for on that object’s prototype, and so on. Thus, the entire prototype chain is traversed until the property is found or null is reached.


// 7. What does destructing do in es6?

// Destructuring is a JavaScript expression that allows us to extract data from arrays, objects, and maps and set them into new, distinct variables. Destructuring allows us to extract multiple properties, or items, from an array​ at a time.

// A technique for unpacking objects, arrays, and assigning them to variables

// Helps to deal with functions that have a lot of parameters, default values

// Is convenient to write, easy to maintain and friendly to read

// Saves from writing repetitive code


const obj = {
    myName : 'Mehedi',
    myRoll : 2501,
    myCity : 'Bagerhat'  
}

// const {myName, myRoll} = obj;
// console.log(myName);
// console.log(obj.myName);


// 8. Is optional chaining is same as ternary operator?

// const ternaryCondition = myRoll === 2501 ? true:false;
// console.log(ternaryCondition);

// console.log(obj.age?.year);


// 9. What do you mean by dot notation and bracket notation? When should you use dot notation or bracket notation?

/* 
The dot notation and bracket notation both are used to access the object properties in JavaScript. The dot notation is used mostly as it is easier to read and comprehend and also less verbose. The main difference between dot notation and bracket notation is that the bracket notation allows us to access object properties using variable. 
*/

console.log(obj.myRoll);
console.log(obj['myRoll']);

const city = 'myCity';
console.log(obj.city); // show undefined
console.log(obj[city]);