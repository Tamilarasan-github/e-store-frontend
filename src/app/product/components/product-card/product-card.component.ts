import { Component, Input } from '@angular/core';

import { ProductService } from '../../services/product.service';
import { ProductDetailView } from '../../model/product-detail-view.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input()
  productDetailView!: ProductDetailView;
  
  public productsInCart: Map<ProductDetailView, number>;

  constructor(private productService: ProductService)
  {
    this.productsInCart = new Map<ProductDetailView, number>;

    this.productService.productsInCartObservable.subscribe((value) => 
    {
      this.productsInCart = value;
    });
  }

  addToCart(product: ProductDetailView)
  {
    this.productService.addToCart(product);
  }

  removeFromCart(product: ProductDetailView)
  {
    this.productService.removeFromCart(product);
  }
}
