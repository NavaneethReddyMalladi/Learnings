import { HttpClient } from '@angular/common/http';
import { Component,inject,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})



export class RolesComponent implements OnInit {

  // first:string="hello"
  // date:Date=new Date()
  // last="world"
  // inputtype:string="button"
  // selectedvaraible=''


  // showWelcomeAlert(){
  //   alert("welcome to angular class")

  // }

  // showMsg(messgae:string){
  //   alert(messgae)

  // }
  http=inject(HttpClient)
  
  ngOnInit(): void {
    alert("hi")
  }

  getAllRoles(){
    this.http.get("https://freeapi.miniprojectideas.com/api/clientstrive/GetAllRoles").subscribe((res:any)=>{

    })


  }

}
