// String
let firstname:string="mittu"
console.log(firstname)


// number
let age:number=54
console.log(typeof(age.toLocaleString()))

// boolean
let isloggedin:boolean=true
console.log(typeof(isloggedin))

// null and undefined
let nothing:null=null
console.log(nothing)

let notdefined:undefined=undefined
console.log(notdefined)


// object literals

let user:{id:number;age:number,name:string}={     //comma seperated or semi colon seperated anything is fine
    id:23,
    age:43,
    name:"mitttu"
}
console.log(user)

// Interfaces

interface product{
    id:number;
    name:string
    price:number
}

const mobile:product={
    id:1,
    name:"iphone",
    price:9999
}
console.log(mobile)

// interface extension with *extends* and adding methods to interface
interface phone{
    id:number
}

interface iphone extends phone{
    name:string,
    res():void
}

let phone:iphone={
    id:3,
    name:"i",
    res(){
        return "okok"
    }
}
console.log(phone.res())


// Arrays

let fruits:string[]=["apple","banana","cherry"]
console.log(fruits)


let scores:number[]=[2,3,4]       //scores:Array<number>=[3,4,3,2] alternative
scores.push(1000)
console.log(scores)

// Multiple datatyped in an array
let multiple_dt_in_a_array:(string|number|boolean)[]=['ok',43,43,"no",true]
console.log(multiple_dt_in_a_array)




// Any :  Avoid using any unless absolutely necessary
let data:any=42;
data="edw"
data=true
console.log(data)

// difference between any and unknown-type checking
let x:any=45
console.log(x/2)

let y:unknown=45
// console.log(y/2)

// unKnown :  Like any, but safer--requries a type check before use.
let input:unknown="hello"
if (typeof input==='string'){
    console.log(input.toUpperCase())
}


// void :  used for fucntions that return nothing

function logmsg(msg:string):void{
    // return "ok"    ❌ Error: Type 'string' is not assignable to type 'void'
}

logmsg("red")


// never :  represents the value never occurs

function throwError(mes:string):never {
    throw new Error(mes)
}

//********  Enums

// Numeric enums(default)
enum direction {
    up,down,left,right
}
let dir:direction=direction.left
console.log(dir)

// String Enums

enum statu {
    success="ok",
    failure="not ok",
    pending="may be"
}

let stats:statu=statu.pending
console.log(stats)


// Union Types(|)

let value:string | number
value="string"
value=43
console.log(value)


// intersection types(&)
interface peson_name{
    name:string
}

interface person_age{
    age:number
}

type person_details=peson_name & person_age

let emp:person_details={
    name:"navaneeth",
    age:34
}
console.log(emp)

// Type Guard : used  to narrow down types within a union..

// typeof Type Guard
function yes_or_no(r:string | number){
    if (typeof r==='string'){
        console.log("yes, i am a string")
    }
    if (typeof r==='number'){
        console.log('yes, i am a number')
    }
}
yes_or_no(4)

// *In* operator Type Guard

interface apple{
    name:string
    ip_address:number
}

interface android{
    ip_address:number
}

function get_phone_type(mobile_type: apple | android){
    if ("ip_address" in mobile_type){
        console.log("yes it is a valid phone")
    }else{
        console.log("not a valid phone")
    }

}

get_phone_type({name:"oppo",ip_address:43})


// *********Type Assertions*******

// **using as**

let somevalue:unknown="hello"
let strlength:number=(somevalue as string).length
console.log(strlength)


// Using Angle-Bracket Syntax(only in .ts not .tsx)

let somevalue2:unknown="typescript"
let len_of_somevalue2=(<string>somevalue2).length
console.log(len_of_somevalue2)







