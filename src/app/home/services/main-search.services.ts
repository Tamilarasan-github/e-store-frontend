import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { MainSearch } from '../model/header-main-search-model';
import { Apollo, Query, QueryRef, gql } from 'apollo-angular';
import { FetchResult } from '@apollo/client';
import { ProductDetailView } from 'src/app/product/model/product-detail-view.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MainSearchService {
  private productSearchResults: BehaviorSubject<ProductDetailView[]>;
  public productSearchResultsObservable: Observable<ProductDetailView[]>;

  constructor(private router: Router, private httpClient: HttpClient, private apollo: Apollo) {
    this.productSearchResults = new BehaviorSubject<ProductDetailView[]>([]);
    this.productSearchResultsObservable = this.productSearchResults.asObservable();
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
        ) 
        {
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

    const queryRef = this.apollo.watchQuery({
      query: GET_PRODUCT_DETAILS,
      variables: yourQueryVariables,
    });

    queryRef.valueChanges.subscribe(({ data, loading, error }) => {
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

    this.router.navigate(['/product-list']);
  }
}
