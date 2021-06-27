import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ErrorComponent } from './error/error.component';
import { AdminGuard } from './GUARDS/admin.guard';
import { CustomerGuard } from './GUARDS/customer.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'admin', loadChildren: ()=>import('./admin/admin.module').then(m=>m.Adminmodule), canActivate:[AdminGuard]},
  {path:'product-detail', component:ProductDetailComponent, canActivate:[CustomerGuard]}, 
  {path:'login', component:LoginComponent},
  {path:'**', component:ErrorComponent}
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
