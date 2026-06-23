const arr = [1, 2, 3]
const newArr = arr
newArr.push(4)
console.log(arr);
console.log(newArr);

// This also updates the original array.
//[ 1, 2, 3, 4 ]
//[ 1, 2, 3, 4 ]

// Spread operator copies an array/object into a new one. Changes in the new copy do not affect the original.

// Spread Operator Array Example:

const data = ["A", "B", "C"]
const newData = [...data, "D", "E", "F"]
console.log(data);
console.log(newData);

//OUTPUT
//[ 'A', 'B', 'C' ]
//[ 'A', 'B', 'C', 'D', 'E', 'F' ]

// Spread Operator on Objects Example:

const obj = {
    Name: "Ahsan",
    Age: 23
}

const newObj = {...obj, Proff: "IT"}
console.log(obj);
console.log(newObj);

//OUTPUT:
//{ Name: 'Ahsan', Age: 23 }
//{ Name: 'Ahsan', Age: 23, Proff: 'IT' }