// *********************ARROW FUNCTIONS*************************

// There’s another very simple and concise syntax for creating functions, that’s often better than Function Expressions.

// SYNTAX let show=(arg1,arg2,arg3,...argN)=>expression

// if we have onlu one parameter parenthesis are not requried
// ************************
// let res=a=>a*b
// console.log(res(3,4))

// **************************
// let a=100

// let res=a<20 ? ()=>console.log("yes") :()=> console.log("no")
// res()

// ****************Multiline arrow functions**********************

// **The arrow functions that we’ve seen so far were very simple. They took arguments from the left of =>, evaluated and returned the right-side expression with them.Sometimes we need a more complex function, with multiple expressions and statements. In that case, we can enclose them in curly braces. The major difference is that curly braces require a return within them to return a value (just like a regular function does).

// ********************
// let sum=(a,b)=>{
//     let res=a+b
//     return res
// }
// console.log(sum(10,6))


// arrow functions do not have this. If this is accessed, it is taken from the outside
// ******************
// let group={
//     title:"our group",
//     students:["a","b","c"],
//     showlist(){
//         this.students.forEach((student)=>{console.log(student,this.title)})
//     }
// }
// group.showlist()
// console.log(group.title)

// The error occurs because forEach runs functions with this=undefined by default, so the attempt to access undefined.title is made.

// **********************
// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
  
//     showList() {
//       this.students.forEach(function(student) {
//         // Error: Cannot read property 'title' of undefined
//         console.log(this.title + ': ' + student);
//       });
//     }
//   };
  
//   group.showList();


// ARROW FUNCTION VS BIND(THIS)
// ******

// const obj = {
//     name: "Alice",
//     sayHello: function () {
//       setTimeout(() => {
//         console.log("Hello, " + this.name);
//       }, 1000);
//     }
//   };
  
//   obj.sayHello(); // ✅ Output: "Hello, Alice"
  
// ************88
// bind(this)
// How It Works

//     Manually binds this to a specific object

//     Returns a new function with this permanently set

//     Can be used in regular functions

// Example: Using .bind(this) in Callbacks

// const obj = {
//   name: "Alice",
//   sayHello: function () {
//     setTimeout(
//       function () {
//         console.log("Hello, " + this.name);
//       }.bind(this), // 👈 Binding `this` to `obj`
//       1000
//     );
//   }
// };

// obj.sayHello(); // ✅ Output: "Hello, Alice"


// Arrow functions do not have arguments but we can send with the rest parameter
// const show = (...args) => {
//     console.log(args); 
//   };
  
//   show(1, 2, 3);



  


