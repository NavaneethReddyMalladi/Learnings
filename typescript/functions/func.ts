//  return type : The type of the value returned by the function can be explicitly defined.

function gettime():number{
    return new Date().getTime()
}
console.log(gettime())


// parameters: function are typed with a similar suntax as varaible declarations

function add(a:number,b:string){
    return a+b
}

console.log(add(10,'39'))


let a:any=true

let b:number=2
console.log(a-b)


// optional parameters

function optional_param(a:number,b:number,c?:number){
    return a+b+(c || 0)
}
console.log(optional_param(10,20))


//Default Parameter 
function default_params(v1:number,v2:number=10){
    return v1*v2
}

console.log(default_params(10))


//name parameters
function named_params({v1,v2}:{v1:number,v2:number}){
    return v1*v2
}
console.log(named_params({v1:10,v2:4}))


// Rest Parameters
// Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.
function rest_params(a:number,b:number,...rest:number[]){

    return a+b+rest.reduce((x,y)=>x+y,0) //accumulator , if i palce 1 here the values of sum starts from 1  and here output will be 16
}
console.log(rest_params(1,2,3,4,5))


// Arrow Functions  are also known as lambda functions.

const arrow_add=(a:number,b:number):number =>a+b;
console.log(arrow_add(10,20))

// without return :: single line of code is not requried explicit return 
const arrow_multiply=(a:number,b:number):number=>{
    return a*b
}
console.log(arrow_multiply(3,4))

// Type Alias  :: Function types can be specified separately from functions with type aliases.
type  add_function=(a:number,b:number)=>number  //only number type is returnable

const adds:add_function=(a,b)=>a+b
console.log(adds(10,45))


