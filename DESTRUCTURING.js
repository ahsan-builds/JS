//Destructuring = Taking values out of arrays or objects and storing them in variables quickly.

//Without Destructuring
const user = {
    First_Name: 'Ahsan',
    Last_Name: "Azhar",
    Age: 23,
    Proffession: "Software Eng"
}

const FirstName = user.First_Name;
const LastName = user.Last_Name;
const age = user.Age;
const Proff = user.Proffession;
console.log(FirstName, LastName, age, Proff);

//With Destructuring:
const User = {
    First_Name: 'Ahsan',
    Last_Name: "Azhar",
    Age: 23,
    Proffession: "Software Eng"
}

const { First_Name, Last_Name, Age, Proffession } = user
console.log(First_Name, Last_Name, Age, Proffession);
