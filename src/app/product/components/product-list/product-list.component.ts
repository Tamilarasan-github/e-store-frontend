import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../services/product.service';
import { ProductDetailView } from '../../model/product-detail-view.interface';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: ProductDetailView[] = [];
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    
   this.productService.productSearchResultsObservable.subscribe((productSearchResults: ProductDetailView[])=>
   {
    console.log("Product List - subscribe");
    this.productList = productSearchResults;

    // this.productList.forEach(element => {
    //   console.log(element.productName);
    // });
    
   });

  }


  addToCart(product : ProductDetailView)
  {

  }

  removeFromCart(product : ProductDetailView)
  {

  }

}
