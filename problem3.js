/* 
Write an arrow function where it will do the following:
a) Square each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements
Print the result. 
*/

const numbers = [1, 4, 5, 8];

const avgSquare = (numbers) => {
    let sum = 0;
    for(const number of numbers){
        sum = sum + Math.pow(number,2);       
    }
    return sum/numbers.length;
}
console.log(avgSquare(numbers));