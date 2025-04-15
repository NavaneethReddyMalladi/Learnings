// ********************PROMISES**************
// Fetch returs use the promises 
 
 let url="https://api.github.com/users/akshaymarch7"


 let data=fetch(url)
 console.log(data)



//  BASIC PROMISE CREATION
console.log('Start')
let mypromise=new Promise((resolve,reject)=>{
    let success=true
    console.log('In Promise')
    setTimeout(() => {
        if (success){
            resolve("task completed")
        }else{
            reject("task failed")
        }
    }, 2000);
})

mypromise
.then((result)=>{
    console.log(result)
})
.catch ((error)=>{
    console.log(error)
})
console.log('stop')



// *****EX---2
let promise=new Promise((resolve,reject)=>{
    let b=1
    if (b===10){
        resolve("true")
    }else{
        reject("false")
    }
})
promise

.then((res)=>{
    console.log(res)
})
.catch((error)=>{
    console.log(error)
})




