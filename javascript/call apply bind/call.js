// with call() an object can use a method belonging to another object

// .call() is a method that allows you to call a function with a specific this value — meaning, you can control what this refers to when the function runs.


// Why use .call()?

//     Borrow methods from one object and use them with another

//     Set the value of this manually

//     Useful for function reuse and functional programming tricks



const a={
    fullname:function(r){
        return this.firstname+this.lastname+r
    }
}

const b={
    firstname:"navaneeth ",
    lastname:"reddy"
}

const c={
    firstname:"mittu",
    lastname:"reddy"
}
let res=a.fullname.call(b," done")
console.log(res)