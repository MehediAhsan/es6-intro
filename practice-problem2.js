/* 
1) You have an array [ 1, 9, 17, 22 ]. Add the all elements
of this array and give output. Do this using for loop &
array.reduce() method. 
*/

const numbers = [ 1, 9, 17, 22 ];
let sum = 0;
for(let i=0; i<numbers.length; i++){
    sum = sum + numbers[i];
}
console.log(sum);

const sumNumber = numbers.reduce((sum,number) => sum + number , 0);
console.log(sumNumber);



/* 
1) Challenging Follow above array of objects. So, you have 3 objects as
array element. Can you find out the total sum from here?

20 + 15 + 22 = 57 . The output will be 57

What are you thinking? Yeah! Do it with for loop. I know you can do it.
But! Wait !! Wait !!! Do the same task using array.reduce() method. 
*/

const people = [
    { name: 'Meena', age: 20 },
    { name: 'Rina', age: 15 },
    { name: 'Suchorita', age: 22 }
];

let ageSum = 0;
for(let i=0; i<people.length; i++){
    ageSum = ageSum + people[i].age;
}
console.log(ageSum);

const peopleAgeSum = people.reduce((sum,peopleAge) => sum + peopleAge.age, 0);
console.log(peopleAgeSum);