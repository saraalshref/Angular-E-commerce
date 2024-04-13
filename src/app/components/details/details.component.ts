import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StaticProductsService } from '../../services/static-products.service';
import { Iproduct } from '../../models/iproduct';
import { Location } from '@angular/common';
import { ApiProductsService } from '../../services/api-products.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  currentId: number = 0;
  product: Iproduct | null = {} as Iproduct;
  prdIds: number[] = [];
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _StaticProductsService: StaticProductsService,
    private router: Router,
    private location: Location,
    private _apiProductService: ApiProductsService
  ) {}

  ngOnInit(){
    this._activatedRoute.paramMap.subscribe((paramMap)=>{
         this.currentId=Number(paramMap.get('id'));
         console.log(this.currentId)
         this._apiProductService.getProductById(this.currentId).subscribe({
           next:(res)=>(
             console.log(res),
             this.product=res
           ),
           error:(err)=>(
             console.log(err)
           )
         })
       
     })
     //this.product=this._productsService.getProductByID(this.currentId)
   
    

  }
 

  back() {
    this.location.back();
  }

  buy(product:Iproduct|null) {
    if (!product) {
      console.error('No product exist');
      return;
    }

    if (product.quantity > 0) {
      product.quantity--;
          }
           else {
      alert('Product is out of stock');
    }
}
  
}
