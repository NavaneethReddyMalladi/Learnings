let students=["hi","hello","how ar you"]

// using normal function
let group={
    title:"our group",
    students:["john","pete","alice","bob"],

    showlist(){
        this.students.forEach(function(student
        ){
            console.log(student)
            console.log(this.title)
        })
    }
}

group.showlist()



// ****using arrow function
// // let group={
//     title:"our group",
//     students:["john","pete","alice","bob"],

//     showlist(){
//         this.students.forEach(student=>console.log(this.title))
//     }
// }

group.showlist()


// Example 1: Regular function vs Arrow function

// function Person() {
//   this.age = 0;

//   setInterval(function() {
//     this.age++; // ❌ `this` is not the Person object
//     console.log(this.age);
//   }, 1000);
// }
// new Person();

// // This doesn't work correctly because this inside setInterval refers to the global object (or undefined in strict mode).
// // ✅ Fix with Arrow Function

// function Person() {
//   this.age = 0;

//   setInterval(() => {
//     this.age++; // ✅ `this` refers to the Person object
//     console.log(this.age);
//   }, 1000);
// }
// new Person();





// // ************argument object for arrow functions
// What is the arguments object in JavaScript?

// In regular functions, JavaScript provides a built-in object called arguments, which holds all the arguments passed to the function, even if the parameters are not defined.
// ✅ Example with regular function:

// function showArgs() {
//     console.log(arguments);
// }

// showArgs(1, 2, 3);

// 🟢 Output:

// [Arguments] { '0': 1, '1': 2, '2': 3 }

//     It captures all the arguments in an array-like object.

// ❌ Arrow Functions do not have their own arguments object

// In arrow functions, the arguments object is not defined, because arrow functions do not have their own execution context. They inherit it from the parent scope.
// 🚫 Example with arrow function:

// const showArgs = () => {
//     console.log(arguments);
// };

// showArgs(1, 2, 3);

// ❌ Output:

// ReferenceError: arguments is not defined

// ✅ How to handle arguments in arrow functions?

// If you want to collect arguments in an arrow function, you should use the rest operator (...):
// ✔️ Using Rest Parameters:

// const showArgs = (...args) => {
//     console.log(args);
// };

// showArgs(1, 2, 3);

// 🟢 Output:

// [1, 2, 3]



// *************DESTRUCTURING IN JS**************

const numbers=[1,2,3]
const [a,b,c]=numbers
console.log(a)
console.log(b)
console.log(c)

// WE can skip values 


const number=[1,2,3]
const [x,,z]=number
console.log(x)
// console.log(y)
console.log(z)


const person = {
    name: 'Alice',
    age: 25
  };
  
  const { name, age } = person;
  console.log(name); // Alice
  console.log(age);  // 25
  


//   3. Nested Destructuring
// 📌 With Objects:

const user = {
  id: 1,
  profile: {
    username: 'john_doe',
    email: 'john@example.com'
  }
};

const {
  profile: { username, email }
} = user;

console.log(username); // john_doe
console.log(email);    // john@example.com





// With Arrays:

const colors = ['red', ['green', 'blue']];
const [primary, [secondary, tertiary]] = colors;

console.log(secondary); // green



 