import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { IUserAddressDetail } from '../../model/user-address.interface';

@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.component.html',
  styleUrls: ['./user-address.component.css']
})
export class UserAddressComponent {

  userAddressDetails: IUserAddressDetail[];
  constructor(private userService: UserService)
  {
    this.userAddressDetails = [];
    
  }

  ngOnInit()
  {
   console.log('User Address - ngOnInit executed');
   this.getUserAddressDetails();
  }

  getUserAddressDetails()
  {
    this.userService.getUserAddressDetails().subscribe((data : IUserAddressDetail[])=>{
      this.userAddressDetails = data;
      
    })
  }
  
}
