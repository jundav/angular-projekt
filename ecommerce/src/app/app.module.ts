import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http'
import { ProductCatalogViewComponent } from './view/product-catalog-view/product-catalog-view.component';
import { ProductViewComponent } from './view/product-view/product-view.component';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { ProductCatalogReducer } from './store/reducers/product-catalog.reducer';
import { ProductReducer } from './store/reducers/product.reducer';
import { ShoppingcartReducer } from './store/reducers/shoppingcart.reducer';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart/shoppingcart.component';
import { CartItemComponent } from './components/shoppingcart/cart-item/cart-item.component';
import { ShoppingCartReducerQuantity } from './store/reducers/shoppingcart-quantity.reducer';
import { ShoppingCartReducerAmount } from './store/reducers/shoppingcart-amount.reducer';


@NgModule({
  declarations: [
    AppComponent,
    ProductCatalogViewComponent,
    ProductViewComponent,
    ProductGridComponent,    
    NavigationComponent,
    ShoppingcartComponent,
    CartItemComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      productcatalog : ProductCatalogReducer,
      product : ProductReducer,
      shoppingcart : ShoppingcartReducer,
      shoppingcartQuantity: ShoppingCartReducerQuantity,
      shoppingcartAmount: ShoppingCartReducerAmount

    }, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
