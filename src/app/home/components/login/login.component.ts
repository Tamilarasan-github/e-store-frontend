import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string;
  password: string;

  constructor(private authService: AuthService){
    this.username="1111111111";
    this.password="123456789123456";
  }

  login()
  {
    console.log(this.username);
    console.log(this.password);
    this.authService.auth(this.username, this.password);
  }

}

