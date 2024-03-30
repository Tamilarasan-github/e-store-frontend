import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { MainSearchService } from 'src/app/home/services/main-search.services';

import { ProductDetailView } from '../model/product-detail-view.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productSearchResults: BehaviorSubject<ProductDetailView[]>;
  public productSearchResultsObservable: Observable<ProductDetailView[]>;

  private productsInCartSubject: Subject<Map<ProductDetailView, number>>;
  public productsInCartObservable: Observable<Map<ProductDetailView, number>>;

  private productsInCart: Map<ProductDetailView, number>;

  constructor(
    private httpClient: HttpClient,
    private mainSearchService: MainSearchService
  ) {
    this.productSearchResults = new BehaviorSubject<ProductDetailView[]>([]);
    this.productSearchResultsObservable =
      this.productSearchResults.asObservable();

    this.productsInCartSubject = new Subject<Map<ProductDetailView, number>>();
    this.productsInCartObservable = this.productsInCartSubject.asObservable();

    this.productsInCart = new Map<ProductDetailView, number>();

    this.productsInCartObservable.subscribe((value) => {
      this.productsInCart = value;
    });

    this.mainSearchService.productSearchResultsObservable.subscribe(
      (productSearchResults: ProductDetailView[]) => {
        console.log('Product Service - subscribe');
        this.productSearchResults.next(productSearchResults);
      }
    );
  }

  getProductsList(): ProductDetailView[] {
    const productList: ProductDetailView[] = [];
    return productList;
  }

  addToCart(product: ProductDetailView) {
    if (this.productsInCart.has(product)) {
      const count: number = this.productsInCart.get(product)! + 1;
      if (product.maximumPerOrder != undefined) {
        if (count <= product.maximumPerOrder) {
          this.productsInCart.set(product, count);
          this.productsInCartSubject.next(this.productsInCart);
          console.log(
            JSON.stringify('Product exists in cart: ' + this.productsInCart)
          );
        } else {
          alert(
            'Sorry! This product you can only order maximum of ' +
              product.maximumPerOrder +
              ' per order'
          );
        }
      }
    } else {
      this.productsInCart.set(product, 1);
      this.productsInCartSubject.next(this.productsInCart);
      console.log(
        JSON.stringify('Newly added to cart: ' + this.productsInCart)
      );
    }
  }

  removeFromCart(product: ProductDetailView) {
    if (this.productsInCart.has(product)) {
      let count = this.productsInCart.get(product)!;

      if (count == 1) {
        count = count - 1;
        this.productsInCart.delete(product);
      } else if (count > 1) {
        count = count - 1;
        this.productsInCart.set(product, count);
      }
    }
  }

  getProductsInCart() {
    return this.productsInCart;
  }
}
