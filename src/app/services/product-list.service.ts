import {Injectable} from '@angular/core';
import {Product} from '../models/product';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  beanList$ = new BehaviorSubject<Product[]>(null);
  private readonly products: Product[];

  constructor() {
    this.products = [
      new Product(1, 'Product 001'),
      new Product(2, 'Product 002'),
      new Product(3, 'Product 003'),
      new Product(4, 'Product 004'),
      new Product(5, 'Product 005'),
      new Product(6, 'Product 006'),
      new Product(7, 'Product 007'),
      new Product(8, 'Product 008')
    ];
    this.beanList$.next(this.products);
  }

  getData(id): Product {
    return this.products.find(x => x.id === +id);
  }
}
