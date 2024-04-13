import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class StaticProductsService {
  products: Iproduct[];
  constructor() {
    this.products = [
      {
        id: 100,
        name: 'Iphone',
        price: 15000,
        quantity: 2,
        imgUrl: 'https://fakeimg.pl/250x100/',
        catId: 1,
      },
      {
        id: 200,
        name: 'Oppo',
        price: 6000,
        quantity: 0,
        imgUrl: 'https://fakeimg.pl/250x100/',
        catId: 1,
      },
      {
        id: 300,
        name: 'Dell Laptop',
        price: 35000,
        quantity: 1,
        imgUrl: 'https://fakeimg.pl/250x100/',
        catId: 2,
      },
      {
        id: 400,
        name: 'Hp Laptop',
        price: 40000,
        quantity: 4,
        imgUrl: 'https://fakeimg.pl/250x100/',
        catId: 2,
      },
      {
        id: 500,
        name: 'lenovo tablet',
        price: 50000,
        quantity: 2,
        imgUrl: 'https://fakeimg.pl/250x100/',
        catId: 3,
      },
      {
        id: 600,
        name: 'samsung tablet',
        price: 7000,
        quantity: 0,
        imgUrl: 'https://fakeimg.pl/250x100/',
        catId: 3,
      },
    ];
  }

  getAllProducts(): Iproduct[] {
    return this.products;
  }

  getProductById(id: number): Iproduct | null {
    let product = this.products.find((prd) => prd.id == id);
    return product ? product : null;
  }

  getProductsByCatId(catId: number): Iproduct[] {
    if (catId == 0) {
      return this.products;
    } else {
      return this.products.filter((prd) => prd.catId == catId);
    }
  }

  mapProductsToIds():number[]{  
      return  this.products.map((prd)=>prd.id)
  }

  // addNewPrd() {}

  // deleteProducts() {}
}
