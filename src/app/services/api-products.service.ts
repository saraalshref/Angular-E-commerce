import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../models/iproduct';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {

  constructor(private httpClient:HttpClient) { }

  getAllProducts():Observable<Iproduct[]>{

   return this.httpClient.get<Iproduct[]>(`${environment.baseUrl}/products`)
  }

  getProductById(id:number):Observable<Iproduct>{

   return this.httpClient.get<Iproduct>(`${environment.baseUrl}/products/${id}`)

  }

  getProductsByCatId(catId:number):Observable<Iproduct[]>{
   return this.httpClient.get<Iproduct[]>(`${environment.baseUrl}/products?catId=${catId}`)
  }

  addNewProduct(prd:Iproduct):Observable<Iproduct>{

   return this.httpClient.post<Iproduct>(
    `${environment.baseUrl}/products`,JSON.stringify(prd)
  )

  }
  deleteProduct(id: number): Observable<Iproduct> {
    return this.httpClient.delete<Iproduct>(
      `${environment.baseUrl}/products/${id}`
    );
  }
 
  Edit(product: Iproduct): Observable<Iproduct> {
    console.log(product)
    return this.httpClient.put<Iproduct>(`${environment.baseUrl}/products/${product.id}`, product ); ;
  }
  

}
