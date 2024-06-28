import { Component } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';

import { ProductService } from 'src/app/product/services/product.service';
import { IProduct } from '../../model/product.interface';
import { ProductDetailView } from '../../model/product-detail-view.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  public productsInCart: Map<ProductDetailView, number>;

  constructor(private productService : ProductService)
  {
    this.productsInCart = this.productService.getProductsInCart()
  }
  ngOnInit()
  {
   
  }
}
