import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product/services/product.service';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
   
  }

}
