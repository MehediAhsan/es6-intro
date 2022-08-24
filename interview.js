// https://www.boardinfinity.com/blog/top-10-features-of-es6/#what-is-es6

// 1. What is ES6? Have you ever used anything from ES6?
/* 
ES6 or the ECMAScript 2015 is the 6th and major edition of the ECMAScript language specification standard. It defines the standard for the implementation of JavaScript and it has become much more popular than the previous edition ES5.
ES6 comes with significant changes to the JavaScript language. It brought several new features like, let and const keyword, rest and spread operators, template literals, classes, modules and many other enhancements to make JavaScript programming easier and more fun. In this article, we will discuss some of the best and most popular ES6 features that we can use in your everyday JavaScript coding.
    let and const Keywords
    Arrow Functions
    Multi-line Strings
    Default Parameters
    Template Literals
    Destructuring Assignment
    Enhanced Object Literals
    Promises
    Classes
    Modules
 */

// 2. Explain the difference between var, let and const.

// var a = 10;
// let b = 10;
// const c = 10;
// a = 20;
// console.log(a); // we can change
// b = 20;
// console.log(b); // we can change
// c = 20;
// console.log(c); //error, we can not change

// if (true) {
//     var a = 10; 
//     let b = 20; 
// }
// console.log(a); 
// console.log(b); // can not work outside scope

// 3. What is the arrow function, and how to create it?
/* 
ES6 provides a feature known as Arrow Functions. It provides a more concise syntax for writing function expressions by removing the "function" and "return" keywords. 
Arrow functions are defined using the fat arrow (=>) notation.
*/
// function declaration 
// function add(first,second){
//     const total = first + second;
//     return total;
// }

// //function expression
// const add2 = function(first , second){
//     return first + second;
// }

// //arrow function
// const add3 = (first , second) => (first + second);

// // const result = add(10,20);
// // console.log(result);

// // const result = add2(10,20);
// // console.log(result);

// // const result = add3(10,20);
// // console.log(result);

// 4. Give an example of an Arrow function in ES6? List down its advantages.

// const display = () => 'es6';
// console.log(display())
// const y = x => x*x; ;
// console.log(y(3));

// const avg = (a,b) => {
//     const sum = a + b;
//     return (a+b)/2;
// }
// console.log(avg(2,4));

// 5. Discuss spread operator in ES6 with an example.
// https://www.javascripttutorial.net/es6/javascript-spread/

/* 
ES6 provides a new operator called spread operator that consists of three dots (...). The spread operator allows you to spread out elements of an iterable object such as an array, map, or set. 
*/

// const odd = [1,3,5];
// const combined = [2,4,6, ...odd];
// console.log(combined);
// console.log(Math.max(...combined));

// 6. What do you understand about default parameters?

/* 
In ES6, users can provide the default values right in the signature of the functions. But, in ES5, OR operator had to be used. 
*/

// const sum = (a=3,b=2) => a+b;
// console.log(sum()); 
// const name = (first, last = 'Ahsan') => first + ' ' + last;
// console.log(name('Mehedi'));

// 7. What are template literals in ES6?

/* 
ES6 also provides Multi-line Strings. Users can create multi-line strings by using back-ticks(`).
ES6 introduces very simple string templates along with placeholders for the variables. The syntax for using the string template is ${PARAMETER} and is used inside of the back-ticked string.
 */

// name='Mehedi Ahsan'
// roll = 2501;
// const bio = `
//     I am ${name}
//     Roll ${roll}
// `
// console.log(bio);


// 8. Tell us the difference between arrow and regular function.

// https://dmitripavlutin.com/differences-between-arrow-and-regular-functions/