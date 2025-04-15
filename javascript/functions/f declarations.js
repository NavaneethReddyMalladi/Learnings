//##############FUNCTIONS###############

// ################FUNCTION DECLARATIONS########################
/* function show(){
    console.log("hello")
}
show()
show()
show()*/

// #################LOCAL VARIABALES####################

// A variable declared inside a function is only visible inside that function.
/*function show(){
    let m="hello"
    console.log(m) 
    // here m is not defined because it is local scope
}
console.log(m)
show()*/


// ##################OUTER VARIABLES#################

// A function can access an outer variable as well, for example:


// let m="hello"
// function show(){
//     console.log(m)
// }
// show()
// console.log(m)

// The function has full access to the outer variable. It can modify it as well.
// The outer variable is only used if there’s no local one

// const m="hello"
// function show(){
//     const m="bye"
   
//     console.log(m)
// }
// console.log(m)
// show()
// console.log(m)

// #############DEFAULT VALUES#################
// If a function is called, but an argument is not provided, then the corresponding value becomes undefined.

// function show(a,b){
//     console.log(a+":"+b)

// }

// show("hello",undefined)

// ##################RETURING A VALUE###################
// A function can return a value back into the calling code as the result.
// The directive return can be in any place of the function. When the execution reaches it, the function stops, and the value is returned to the calling code (assigned to result above).

// function show(a,b){
//     if (a===10){
//         return a+b
       

//     }else{
//         return a-b
//     }
    
// }

// let r=show(10,3)
// console.log(r)



// If a function does not return a value, it is the same as if it returns undefined:

// function show(){
//     return
// }
// console.log(show())

/*Never add a newline between return and the value

For a long expression in return, it might be tempting to put it on a separate line, like this:

return
 (some + long + expression + or + whatever * f(a) + f(b))

That doesn’t work, because JavaScript assumes a semicolon after return. That’ll work the same as:

return;
 (some + long + expression + or + whatever * f(a) + f(b))

So, it effectively becomes an empty return.

If we want the returned expression to wrap across multiple lines, we should start it at the same line as return. Or at least put the opening parentheses there as follows:

return (
  some + long + expression
  + or +
  whatever * f(a) + f(b)
  )

And it will work just as we expect it to.*/




