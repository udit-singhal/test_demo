import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Product} from '../models/product';
import {ProductListService} from './product-list.service';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  bean$ = new BehaviorSubject<Product>(null);

  constructor(
    private listService: ProductListService,
  ) {
  }

  sendData(p: Product) {
    this.bean$.next(p);
  }

  getData(id): Product {
    return this.listService.getData(id);
  }
}
