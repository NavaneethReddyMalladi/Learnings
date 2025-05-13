interface Student {
    name:string;
    age:number;
    height?:number
}
const student:Student={
    name:"mittu",
    age:34,
}
console.log(student.name)


interface player extends Student{
    weight:number


}

const player1:player={
    name:"nava",
    age:35,
    weight:75
}
console.log(player1)




