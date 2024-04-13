import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Icategory } from '../../models/icategory';
import { ProductsComponent } from '../products/products.component';
import { ApicategoryService } from '../../services/apicategory.service';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [FormsModule, CommonModule, ProductsComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent  {
  selectedCatId: number = 0;
  categories: Icategory[]=[];
  recievedTotalOrderPrice: number = 0;

  constructor(private apiCategory:ApicategoryService) {
    this.apiCategory.getAllCategory().subscribe({
       next:(res)=>{
         this.categories=res
       },
       error:(err)=>{
          console.log(err);
          
       }
     })
 
   }
 

  change(top: number) {
    this.recievedTotalOrderPrice = top;
  }

}
