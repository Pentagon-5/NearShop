import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'AddProduct',component:AddProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
