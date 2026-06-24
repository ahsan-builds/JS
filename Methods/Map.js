// Take every item in an array → do something with each item → return a new array.
// Without Map:
const number = [1,2,3];
const result = [];
for(let i=0; i<number.length; i++){
    result.push(number[i]*2)    
}
console.log(result);

// With Map:

let num = [1, 2, 4];
let mapping = num.map((item) => {
    return item + 2;
})
console.log(mapping);
console.log("Original:", num);