import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    ;
  }

  email: string = '';
  password: string = '';

  constructor(private auth : AuthService) {}
   
  login()
  {
    if(this.email == '')
    {
      alert('please enter email');
      return;
    }
    if(this.password == '')
    {
      alert('please enter password');
      return;
    }

    this.auth.login(this.email,this.password)
    this.email = '';
    this.password = '';
  }

  signInwithGoogle(){
    console.log('log in from ts')
    this.auth.googleSignIn();
  }

  // forgotPassword(){}

}
