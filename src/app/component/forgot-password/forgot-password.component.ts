import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  email: string = '';
  

  constructor(private auth : AuthService) {}

  forgotPassword(){
    console.log(this.email)
        this.auth.forgotPassword(this.email)
  }
}