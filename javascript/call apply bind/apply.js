// *************apply()***************




// with the apply() method, you can write a method that can be used on different objects


const a={
    fullname:function(x,y) {
        return this.first+this.last+x+y
    }
}

const b={
    first:"mittu ",
    last:"reddy"
}


let res=a.fullname.apply(b,[" yes"," no "]) 
// apply and call work same but in apply the arguments will pass as an array.
console.log(res)