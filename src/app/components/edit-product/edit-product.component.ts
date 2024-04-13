import { ApicategoryService } from '../../services/apicategory.service';  
import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Icategory } from '../../models/icategory';
import { Iproduct } from '../../models/iproduct';
import { ApiProductsService } from '../../services/api-products.service';
//import { ApicategoryService } from '../../services/apicategory.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {
  categories: Icategory[] = [];
  product: Iproduct = {} as Iproduct ;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiProductsService,
    private apiCategory:ApicategoryService
  ) {

     this.apiCategory.getAllCategory().subscribe({
        next:(res)=>{
          this.categories=res
        },
        error:(err)=>{
           console.log(err);
           
        }
      })
   }

  ngOnInit(): void {
    const productId = this.route.snapshot.params['id'];
    this.apiService.getProductById(productId).subscribe(product => {
      this.product = product;
    });
  }

  saveProduct(): void {
    this.apiService.Edit(this.product).subscribe(() => {
      this.router.navigate(['/products']);
    });
  }
}
