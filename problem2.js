/* 
Write an arrow function where it will do the following:
a) It will take an array where the array elements will be the
name of your friends
b) Check if the length of each element is even, push elements
with even length to a new array and return the result
Print the result. 
*/

const friends = ['Rakib', 'Sohan', 'Siam','emon'];

const evenName = (friends) => {
    const newArray =[];
    for(let i=0; i<friends.length; i++){
        if(friends[i].length % 2 === 0){
            newArray.push(friends[i])
        }     
    }
    return newArray;
}
console.log(evenName(friends));