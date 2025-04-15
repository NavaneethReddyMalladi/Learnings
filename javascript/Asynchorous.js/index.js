console.log("start")

 setTimeout(()=>{
    console.log("hello")
 },0)
 console.log("end")

 
// ************HANDLING ASYNCHOROUS FUNCTIONS**************************************

// 1.*********CALLBACK FUNCTIONS***********

// A callback function is a function that is passed as an argument to another function and is executed later, usually after an operation completes.

//  ?Why Use Callbacks?
// JavaScript is asynchronous, meaning some operations take time to complete. Instead of waiting for them, JavaScript uses callbacks to execute the next steps once the operation is done.
setTimeout(function () {
    console.log("ok")
    
}, 1000
)

// 
try {
    setTimeout(()=>{
        console.log(a)
    },2000)
}
catch{
    console.log("error")
}

console.log("dsdg")


// changing  value of username inside the function
let userName = 'John';
function showMessage() {
    userName="bob"
    let message = 'Hello, ' + userName;
}
console.log(userName)
showMessage();
console.log(userName)


