import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/models/istate.model';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';



@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {

  public productcatalogdk: Observable<Array<IProduct>>

  constructor(private store: Store<IState>, private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.productcatalogdk = this.store.select(store => store.productcatalog)
  }

}
