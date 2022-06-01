import { Component, OnInit } from '@angular/core';
import { Login } from './login';

import { LoginuserService } from './loginuser.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:Login =new Login();

forgot(){
  alert("This option is not avaliable. Right Now!")
}
  constructor(private loginuserservice:LoginuserService) { }

  ngOnInit(): void {
  }
  
   userLogin(){
    console.log(this.login)
    this.loginuserservice.loginUser(this.login).subscribe(Logindata=>{
    
      alert("Login Successfully")
    }, error=>alert("Invalid User")
    );
    
  }

}