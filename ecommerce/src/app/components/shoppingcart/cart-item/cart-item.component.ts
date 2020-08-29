import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/models/istate.model';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  public shoppingcartdk: Array<any>
  public quantitydk: number 
  public amountdk: number
  

  constructor(private store:Store<IState>, private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.store.select(state => state.shoppingcart).subscribe(res => this.shoppingcartdk = res)
    this.store.select(state => state.shoppingcartQuantity).subscribe(res => this.quantitydk = res)    
    this.store.select(state => state.shoppingcartAmount).subscribe(res => this.amountdk = res)    
    
  }

  
  increment(product){    
     this.shoppingCartService.increment(product) 
      
  }

  decrement(product){
    this.shoppingCartService.decrement(product)
  }

  clearCart(){
    this.shoppingCartService.clear()
  }

}
