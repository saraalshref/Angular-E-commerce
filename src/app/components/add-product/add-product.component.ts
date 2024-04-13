import { Component } from '@angular/core';
import { Icategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { Iproduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { ApiProductsService } from '../../services/api-products.service';
import { Router } from '@angular/router';
import { ApicategoryService } from '../../services/apicategory.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  categories: Icategory[] = [];
  product: Iproduct = {} as Iproduct ;

  constructor(private _ApiProductsService: ApiProductsService,private router:Router,private apiCategory:ApicategoryService) {
   this.apiCategory.getAllCategory().subscribe({
      next:(res)=>{
        this.categories=res
      },
      error:(err)=>{
         console.log(err);
         
      }
    })

  }

  addProduct() {
    this._ApiProductsService.addNewProduct(this.product).subscribe(
      () => {
        Swal.fire({
          title: "Success",
          text: "Product added successfully!",
          icon: "success"
        }).then(() => {
          this.router.navigateByUrl('/Products');
        });
      },
      (error) => {
        console.error("Error adding product:", error);
      }
    );
  }
  
}
