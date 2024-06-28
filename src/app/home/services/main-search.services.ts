import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { MainSearch } from '../model/header-main-search-model';
import { Apollo, Query, QueryRef, gql } from 'apollo-angular';
import { ApolloClient, ApolloQueryResult, FetchResult, NormalizedCacheObject } from '@apollo/client';
import { ProductDetailView } from 'src/app/product/model/product-detail-view.interface';
import { Router } from '@angular/router';
import { IUser, UserResponse } from '../model/user.interface';
import { ModalPopUpService } from 'src/app/common/services/modal-pop-up.service';
import { ApolloClientService } from 'src/app/services/apollo-client.service';

@Injectable({
  providedIn: 'root',
})
export class MainSearchService {
  private productSearchResults: BehaviorSubject<ProductDetailView[]>;
  public productSearchResultsObservable: Observable<ProductDetailView[]>;
  private publicService: ApolloClient<NormalizedCacheObject> ;
  private authorizedAccessService: ApolloClient<NormalizedCacheObject>;
  
  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private apollo: Apollo,
    private modalPopUp: ModalPopUpService,
    private apolloClientService: ApolloClientService
  ) {
    this.productSearchResults = new BehaviorSubject<ProductDetailView[]>([]);
    this.productSearchResultsObservable =this.productSearchResults.asObservable();
    this.publicService= this.apolloClientService.getApolloClient('publicUrl');
    this.authorizedAccessService= this.apolloClientService.getApolloClient('authorizedAccessUrl');
  }

  searchProducts(searchRequest: MainSearch) {
    const yourQueryVariables = {
      searchValue: searchRequest.searchValue,
      first: 10,
      after: null,
      before: null,
    };

    const GET_PRODUCT_DETAILS = gql`
      query GetAllActiveProductDetails(
        $searchValue: String
        $first: Int
        $after: String
        $before: String
      ) {
        getAllActiveProductDetailsWithStocksPriceAndDiscounts(
          productName: $searchValue
          first: $first
          after: $after
          before: $before
        ) {
          edges {
            node {
              uuid
              productTitle
              description
              imageUrl
              totalPricePerUnit
              finalPricePerUnit
              discountType
              discountAmount
              discountPercentage
              minimumPerOrder
              maximumPerOrder
              stockMessage
            }
            cursor
          }
          pageInfo {
            startCursor
            endCursor
            hasNextPage
            hasPreviousPage
          }
        }
      }
    `;

    const queryRef = this.publicService.watchQuery({
      query: GET_PRODUCT_DETAILS,
      variables: yourQueryVariables,
    });

    queryRef.subscribe(({ data, loading, error }) => {
      if (loading) {
      } else if (error) {
        console.error('Error:', error);
      } else {
        const productData = data as {
          getAllActiveProductDetailsWithStocksPriceAndDiscounts: {
            edges: { node: ProductDetailView }[];
          };
        };

        // Assuming the structure, you can extract the product array like this
        const products: ProductDetailView[] =
          productData.getAllActiveProductDetailsWithStocksPriceAndDiscounts.edges.map(
            (edge) => edge.node
          );

        // Update your subject
        this.productSearchResults.next(products);

        // Log the data
        console.log('Data:', this.productSearchResults);
      }
    });

  

    return new Observable((observer) => {
      queryRef.subscribe({
        next: (result: ApolloQueryResult<any>) => {
          const { data, loading, error } = result;
          if (loading) {
            // Handle loading state
          } else if (error) {
            console.error('Error:', error);
            // Handle error state
          } else {
            const productData = data as {
              getAllActiveProductDetailsWithStocksPriceAndDiscounts: {
                edges: { node: ProductDetailView }[];
              };
            };

            // Assuming the structure, you can extract the product array like this
            const products: ProductDetailView[] =
              productData.getAllActiveProductDetailsWithStocksPriceAndDiscounts.edges.map(
                (edge) => edge.node
              );

            // Update your subject
            this.productSearchResults.next(products);

            // Log the data
            console.log('Data:', this.productSearchResults);

            this.router.navigate(['/product-list']);
          }
        },
        error: (err) => {
          console.error('Subscription error:', err);
          observer.error(err); // Propagate error to the subscriber
        },
      });

    
      
    });
  }




}

   
   

