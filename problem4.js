/* 
Write an arrow function where it will do the following:
a) It will take two array inputs
b) Combine the two arrays and assign them in a new array
c) Find the maximum number from the new array and return the
result
Print the result. 
*/

const array1 = [2, 5, 7, 12];
const array2 = [4, 8, 10, 15];

const findMax = (array1,array2) => {
    const newArray = [...array1,...array2];
    return Math.max(...newArray);
}

console.log(findMax(array1,array2));
