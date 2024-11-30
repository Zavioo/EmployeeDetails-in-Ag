import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  username:string =""
  password:string =""

  constructor(private router: Router) {} // Inject Router

  

  login(){

        if( this.username == "touchworld" && this.password == "touchworldTech"){
                 
          // alert("Can Go to Employee Details Pages")
          
          this.router.navigate(['Employee']); // Navigate to Employee page

        }else{

          alert(" Username and Password are invalid ")

        }
  }
}
