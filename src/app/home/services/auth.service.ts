import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserResponse } from '../model/user.interface';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ModalPopUpService } from 'src/app/common/services/modal-pop-up.service';
import { SpinnerService } from 'src/app/common/services/spinner.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isUserAuthorizedBehaviorSubject: BehaviorSubject<boolean>;
  public isUserAuthorizedObservable: Observable<boolean>;

  private loggedInUser: BehaviorSubject<UserResponse | undefined>;
  public loggedInUserObservable: Observable<UserResponse | undefined>;
  
  constructor( private router: Router,
    private apollo: Apollo,
    private modalPopUp: ModalPopUpService,
    private spinnerService: SpinnerService) { 

    this.isUserAuthorizedBehaviorSubject = new BehaviorSubject<boolean>(false);
    this.isUserAuthorizedObservable =this.isUserAuthorizedBehaviorSubject.asObservable();

    this.loggedInUser = new BehaviorSubject<UserResponse | undefined>(undefined);
    this.loggedInUserObservable =this.loggedInUser.asObservable();
  }

  auth(phoneNumber: string, password: string) {
    const yourQueryVariables = {
      phoneNumber: phoneNumber,
      password: password,
    };

    this.spinnerService.show();
    
    const AUTH_DETAILS = gql`
      query Login($phoneNumber: String!, $password: String!) {
        login(phoneNumber: $phoneNumber, password: $password) {
          user {
            uuid
            jwtToken
            role
            userName
            firstName
            middleName
            lastName
            emailId
            phoneNumber
            gender
            dateOfBirth
            profilePic
            lastLoginDate
            userAccountStatus
            sellerId
            createdDate
            updatedDate
            createdBy
            updatedBy
          }
          errorMessage
          successMessage
        }
      }
    `;

    const queryRef = this.apollo.watchQuery({
      query: AUTH_DETAILS,
      variables: yourQueryVariables,
    });

   
    queryRef.valueChanges.subscribe(({ data, loading, error }) => {
      if (loading) {

      } else if (error) {
        console.error('Error:', error);
      } else {
        const loginData = data as {
          login : UserResponse
        };
        console.log(loginData);
        this.isUserAuthorizedBehaviorSubject.next(true);
        this.loggedInUser.next(loginData.login);
        localStorage.setItem('Authorization', 'Bearer '+loginData.login.user!.jwtToken);
        this.modalPopUp.closeModalByTitle("Login");
        //alert("Sucessfully logged in.")
        this.spinnerService.hide();
      }
    });
  }


  logOff()
  {
    this.isUserAuthorizedBehaviorSubject.next(false);
    this.loggedInUser.next(undefined);
  }

}
