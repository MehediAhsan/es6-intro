/* 
1) Write an arrow function that will take 3 parameters, will multiply
the parameters and will return the result.

2) Write the following sentence in three lines and print the result:
I am a web developer. I love to code. I love to eat biryani.

3) Write an arrow function that will take 2 parameters: One parameter
will come from you and the other parameter will be a default
parameter. Add these two parameters and return the result. 
*/

const multiply = (a, b, c) => a * b * c;
console.log(multiply(2,3,4)); 

const lines = `
I am a web developer.
I love to code.
I love to eat biryani.
`
console.log(lines);

const sum = (a, b=5) => a + b;
console.log(sum(7));