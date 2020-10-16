import {Component, OnInit} from '@angular/core';
import {Product} from '../models/product';
import {ActivatedRoute} from '@angular/router';
import {ProductDetailService} from '../services/product-detail.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: []
})
export class ProductDetailComponent implements OnInit {
  product: Product = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private beanService: ProductDetailService,
  ) {
  }

  ngOnInit() {
    if (this.beanService.bean$.getValue() == null) {
      this.activatedRoute.paramMap.subscribe(para => {
        const id = para.get('id');
        this.product = this.beanService.getData(id);
      });
    } else {
      this.beanService.bean$.asObservable().subscribe(data => {
        this.product = data;
      });
    }

  }
}
