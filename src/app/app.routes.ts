import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { OrderComponent } from './components/order/order.component';
import { ProductsComponent } from './components/products/products.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DetailsComponent } from './components/details/details.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';

export const routes: Routes = [ //first match wins
  // {path:'',component: HomeComponent},

  // localhost:4200
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'About', component: AboutUsComponent, },
  { path: 'Products', component: OrderComponent },
  {path:'Add',component: AddProductComponent},
  {path:'Details/:id',component: DetailsComponent},
  {path:'Edit/:id',component:EditProductComponent},
  {path:'**',component:NotFoundComponent},

];
