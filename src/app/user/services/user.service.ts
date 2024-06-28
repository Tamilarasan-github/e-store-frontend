import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { UserResponse } from 'src/app/home/model/user.interface';
import { IUserAddressDetail } from '../model/user-address.interface';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError} from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private router: Router,
    private apollo: Apollo) { }



    getUserAddressDetails(): Observable<IUserAddressDetail[]> {
      const USER_ADDRESS_DETAILS = gql`
        query {
          getUserAddressDetailsForLoggedInUserId {
            uuid
            addressName
            addressType
            markAsDefaultFlag
            addressLine1
            addressLine2
            addressLine3
            city
            state
            country
            zipCode
            phoneNumber
            notes
            createdDate
            updatedDate
            createdBy
            updatedBy
            deleteFlag
          }
        }
      `;
    
      const token =localStorage.getItem('Authorization');
      const queryRef = this.apollo.watchQuery({
        query: USER_ADDRESS_DETAILS,
        context: {
          headers: new HttpHeaders().set("Authorization", 'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbIlVTRVIiXSwidXVpZCI6ImJkZmVlNWQ0LWMxNzItNDkxZS1iM2MxLWE1NzNiMjk2NDgxZCIsInN1YiI6IjExMTExMTExMTEiLCJleHAiOjE3MTI1NTI1MzB9.umkjWeXFUIqnpEBwCqQgRCTXoFWAddNkPXqPVAC_dm8'),
        }
      });
    
      return queryRef.valueChanges.pipe(
        map(({ data }) => {
          const userData = data as { getUserAddressDetailsForLoggedInUserId: IUserAddressDetail[] };
          console.log(JSON.stringify(userData));
          return userData.getUserAddressDetailsForLoggedInUserId;
        }),
        catchError(error => {
          console.error('Error:', error);
          // Handle error as needed
          return throwError(error); // Rethrow error to propagate it
        })
      );
    }
  


}


