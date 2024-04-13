import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { Icategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { BorderShadowDirective } from '../../directives/border-shadow.directive';
import { StaticProductsService } from '../../services/static-products.service';
import { Router, RouterLink } from '@angular/router';
import { ApiProductsService } from '../../services/api-products.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    BorderShadowDirective
    
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnChanges,OnInit {
  filteredProducts: Iproduct[]=[];

  @Output() onTotalOrderPriceChanged: EventEmitter<number>;

  @Input() recievedCatId: number = 0;
  products: Iproduct[] = []; 

  constructor(
    private staticProductsSer: StaticProductsService,
    private router: Router,
    private _ApiProductsSer:ApiProductsService
  ) {
    // this.filteredProducts = this.staticProductsSer.getAllProducts();

    this.onTotalOrderPriceChanged = new EventEmitter<number>();
  }


  ngOnInit(): void {
    // this._ApiProductsSer.getAllProducts().subscribe((res)=>{
    //   this.filteredProducts=res
    // })
    this._ApiProductsSer.getAllProducts().subscribe({
      next:(res)=>{
        this.filteredProducts=res
      },
      error:(err)=>{
         console.log(err);
         
      }
    })

  }





  ngOnChanges() {
    // this.filteredProducts = this.staticProductsSer.getProductsByCatId(
    //   this.recievedCatId
    // );

      if(this.recievedCatId==0){
        this._ApiProductsSer.getAllProducts().subscribe((res)=>{
          this.filteredProducts=res
        })
      }
    else{
      this._ApiProductsSer.getProductsByCatId(this.recievedCatId).subscribe((res)=>{
        this.filteredProducts=res
        
    })
    }

  }

  
  trackProducts(i: number, p: Iproduct) {
    return p.id;
  }
  navigateToDetails(id:number) {
    this.router.navigateByUrl(`/Details/${id}`);
  }
 
  
  delete(productId: number): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this product!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        this._ApiProductsSer.deleteProduct(productId).subscribe(() => {
          this.filteredProducts = this.filteredProducts.filter(product => product.id !== productId);
          
          Swal.fire({
            title: "Success",
            text: "Product deleted successfully!",
            icon: "success"
          });
        }, (error) => {
          console.error("Error deleting product:", error);
          Swal.fire({
            title: "Error",
            text: "Failed to delete product. Please try again later.",
            icon: "error"
          });
        });
      }
    });
  }
  
  edit(productId:number){
    this.router.navigate(['/Edit', productId]);

  }
  }
  

