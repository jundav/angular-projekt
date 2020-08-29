import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCatalogViewComponent } from './view/product-catalog-view/product-catalog-view.component';
import { ProductViewComponent } from './view/product-view/product-view.component';


const routes: Routes = [
  {path: '', component:ProductCatalogViewComponent},
  {path: 'products', component:ProductCatalogViewComponent},
  {path: 'products/:id', component:ProductViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
