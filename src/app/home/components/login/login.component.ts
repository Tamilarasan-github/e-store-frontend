import { Component } from '@angular/core';
import { ModalPopUpService } from 'src/app/common/services/modal-pop-up.service';
import { MainSearchService } from '../../services/main-search.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string;
  password: string;

  constructor(private authService: MainSearchService){
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

