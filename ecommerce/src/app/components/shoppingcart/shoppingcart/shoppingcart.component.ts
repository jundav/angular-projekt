import { Component, OnInit } from '@angular/core';


import { Store } from '@ngrx/store';
import { IState } from 'src/app/models/istate.model';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';


@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {
  

  public shoppingcartdk: { }
  public quantitydk: number

  constructor(private store: Store<IState>, private shoppingCartService: ShoppingCartService ) { }

  ngOnInit(): void {    
    this.store.select(state => state.shoppingcart).subscribe(res => this.shoppingcartdk = res)
    this.store.select(state => state.shoppingcartQuantity).subscribe(res => this.quantitydk = res)
    
  }

/*   addToCart(productdk, quantity = 1) {
    this.shoppingCartService.add(productdk, quantity)
  }
  removeFromCart(id) {
    this.shoppingCartService.remove(id)
  } */

}
