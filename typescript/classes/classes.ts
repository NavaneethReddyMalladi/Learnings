// class Emp{
//     name:string
//     age:number
//     department:string

//     constructor(name:string,age:number,department:string){
//         this.name=name
//         this.age=age
//         this.department=department
//     }
//     empDetails(){
//         console.log(`name is ${this.name} and department is ${this.department}`)

//     }
// }
// const empp=new Emp("mittu",34,"cse")
// // console.log(empp.empDetails())
// empp.empDetails()



class BankAccount {
    name:string;
    balance:number

    constructor(name:string,balance:number){
        this.name=name,
        this.balance=balance
    }


    public deposit(amount:number){
        this.balance+=amount
    }

    protected dispalyBalance(){
    return (`total balance is ${this.balance}`)
    }


}

const bankdetails=new BankAccount('navaneeth',1000)
// console.log(bankdetails.dispalyBalance())
bankdetails.deposit(400)
// console.log(bankdetails.dispalyBalance())

class MiniBank extends BankAccount{
    withdraw:number
    readonly a:number=100000000000

    constructor(name:string,balance:number, withdraw:number){
        super(name,balance)
        this.withdraw=withdraw
    }

    withdrawl_money(money:number){
        this.balance-=money
        this.deposit(300)

    }
    displaytotalmoney(){
        return this.balance
        
    }

}

const minibank=new MiniBank("navaneeth",1000,300)

// console.log(minibank.displaytotalmoney())
minibank.withdrawl_money(200)
minibank.deposit(300)
console.log(minibank.displaytotalmoney())
// minibank.a=308   cannot assign a value becauseit is read only




