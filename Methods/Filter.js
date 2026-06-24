// filter() is an array method that creates a new array containing only the elements that pass a condition (test).
// Without Filter:

const numbers = [1, 2, 3, 4, 5];
const evenNumber = [];

for (let i=0; i<numbers.length; i++){
    if (numbers[i] % 2 === 0) {
        evenNumber.push(numbers[i]);

    }
}
console.log(evenNumber);

//With filter Method:
const num = [1,2,3,4,5,6,7,8,9,10];

const filtered = num.filter((num) => {
    return num % 2 === 0;
});

console.log(filtered);
