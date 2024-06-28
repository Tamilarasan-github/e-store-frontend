import { Component, OnInit } from '@angular/core';
import { MainSearch } from '../../model/header-main-search-model';
import { MainSearchService } from '../../services/main-search.services';
import { ModalPopUpService } from 'src/app/common/services/modal-pop-up.service';
import { IUser } from '../../model/user.interface';
import { UserService } from 'src/app/user/services/user.service';
import { IUserAddressDetail } from 'src/app/user/model/user-address.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isUserLoggedIn: boolean;
  authorizedUser: IUser | undefined;
  searchCategory: string
  searchValue: string;
  showUserProfileActionsDropdown: boolean;
    
  constructor(private mainSearchService: MainSearchService, private authService: AuthService, private modal: ModalPopUpService, private userService: UserService) {
    this.isUserLoggedIn = false;
    this.searchCategory = 'All';
    this.searchValue = '';
    this.showUserProfileActionsDropdown = false;
    //this.authorizedUser = undefined;

    this.authService.isUserAuthorizedObservable.subscribe(authResponse=>{
      this.isUserLoggedIn = authResponse;
    });

    this.authService.loggedInUserObservable.subscribe(authResponse=>{
      this.authorizedUser = authResponse?.user!;
    });
   }

  ngOnInit(): void {
    
  }

  searchProducts()
  {
    const searchRequest: MainSearch = new MainSearch(this.searchCategory, this.searchValue);
    console.log(JSON.stringify(searchRequest));
    this.mainSearchService.searchProducts(searchRequest);
  }

  openCart()
  {
    
  }

  loginPopUp(content: any)
  {
    this.modal.openModal("Login", content)
  }

  signUpPopUp(content: any)
  {
    this.modal.openModal("Sign-Up", content)
  }

  userProfileActions(event: Event) {
    event.stopPropagation(); // Prevent the click event from bubbling up
    this.showUserProfileActionsDropdown = !this.showUserProfileActionsDropdown;
  }

  logOff()
  {
    this.authService.logOff();
    
  }

  
}
