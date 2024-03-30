import { Component, OnInit } from '@angular/core';
import { MainSearch } from '../../model/header-main-search-model';
import { MainSearchService } from '../../services/main-search.services';
import { ModalPopUpService } from 'src/app/common/services/modal-pop-up.service';

@Component({
  selector: 'app-home-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isUserLoggedIn: boolean;
  searchCategory: string
  searchValue: string;

  
  constructor(private mainSearchService: MainSearchService, private modal: ModalPopUpService) {
    this.isUserLoggedIn = false;
    this.searchCategory = 'All';
    this.searchValue = '';
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
}
