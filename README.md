


---

- from
  - origin demo from techiediaries blog, delete component array use observable provide data.

- access demo:
  - [demo](https://littleostar-angular.github.io/angular-router-demo-techiediaries/)
  - [products](https://littleostar-angular.github.io/angular-router-demo-techiediaries/products)
  - [product/5](https://littleostar-angular.github.io/angular-router-demo-techiediaries/product/5)

---

- angular
  - version 7
  - router demo
  - rxjs subject send data

---

product-detail.component.ts
```typescript
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
```

product-detail.service.ts
```typescript
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
```

product-list.service.ts
```typescript
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
```

product-list.component.ts
```typescript
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
```

---

end
