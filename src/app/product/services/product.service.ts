import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getProductsList() : Product[]
  {
    const productList : Product[] = [
      new Product(1, 'ABC-001', 'iPhone', 'iPhone 7', 150000, '', 'Active', 9, new Date(), new Date()),
      new Product(2, 'ABC-002', 'iPhone', 'iPhone 7 plus', 150000, '', 'Active', 9, new Date(), new Date()),
      new Product(3, 'ABC-003', 'iPhone', 'iPhone 9', 150000, '', 'Active', 9, new Date(), new Date()),
      new Product(4, 'ABC-004', 'iPhone', 'iPhone 9 plus', 150000, '', 'Active', 9, new Date(), new Date()),
      new Product(5, 'ABC-005', 'iPhone', 'iPhone 11', 150000, '', 'Active', 9, new Date(), new Date()),
      new Product(6, 'ABC-006', 'iPhone', 'iPhone 11 pro', 150000, '', 'Active', 9, new Date(), new Date()),
      new Product(7, 'ABC-007', 'iPhone', 'iPhone 12', 150000, '', 'Active', 9, new Date(), new Date()),
      new Product(8, 'ABC-008', 'iPhone', 'iPhone 12 pro', 150000, '', 'Active', 9, new Date(), new Date()),
      new Product(9, 'ABC-009', 'iPhone', 'iPhone 13', 150000, '', 'Active', 9, new Date(), new Date()),
      new Product(10, 'ABC-010', 'iPhone', 'iPhone 13 pro', 150000, '', 'Active', 9, new Date(), new Date()),
      new Product(11, 'ABC-011', 'iPhone', 'iPhone 13 pro max', 150000, '', 'Active', 9, new Date(), new Date()),
      new Product(12, 'ABC-012', 'iPhone', 'iPhone 14', 150000, '', 'Active', 9, new Date(), new Date()),
      new Product(13, 'ABC-013', 'iPhone', 'iPhone 14 plus', 150000, '', 'Active', 9, new Date(), new Date()),
      new Product(14, 'ABC-013', 'iPhone', 'iPhone 14 pro max', 150000, '', 'Active', 9, new Date(), new Date()),    
    ]
    return productList
  }
}
