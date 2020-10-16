import {Component, OnInit} from '@angular/core';
import {Product} from '../models/product';
import {Router} from '@angular/router';
import {ProductDetailService} from '../services/product-detail.service';
import {ProductListService} from '../services/product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: 'product-list.component.html'
})
export class ProductListComponent implements OnInit {
  public products: Product[];

  constructor(
    private router: Router,
    private beanService: ProductDetailService,
    private listService: ProductListService,
  ) {
  }

  ngOnInit(): void {
    this.listService.beanList$.asObservable().subscribe(data => this.products = data);
  }

  public gotoProductDetails(url, id) {
    this.router.navigate([url, id]).then(e => {
      if (e) {
        console.log('Navigation is successful!');
      } else {
        console.log('Navigation has failed!');
      }
    });
  }

  public gotoProductDetailsV2(url, product) {
    const myurl = `${url}/${product.id}`;
    // console.log(myurl);

    this.router.navigateByUrl(myurl).then(e => {
      if (e) {
        // console.log('Navigation is successful!');
        this.beanService.sendData(product);
      } else {
        console.log('Navigation has failed!');
      }
    });

  }

}
