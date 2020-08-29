import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IState } from '../models/istate.model';
import * as ShoppingCartActions from '../store/actions/shoppingcart.actions'

@Injectable({
  providedIn: 'root'
})


export class ShoppingCartService {

  private cart: Array<any>
  

  constructor(private store: Store<IState>) { }

  add(product, quantity) {
    this.store.select(store => store.shoppingcart).subscribe(res => this.cart = res)
    let exist = this.cart.find(pro => { return pro.product._id === product._id})

    console.log("Add to cart, check if product exist, on shopping-cart.service",exist)

    if (!exist){
      this.store.dispatch(new ShoppingCartActions.Add({product, quantity}) )
    }
    else {
      this.increment({product, quantity})
    }
    this.totalQuantity()  
    this.totalAmount()    
   
  }

  remove(id) {
    this.store.dispatch(new ShoppingCartActions.Remove(id))
    this.totalQuantity() 
    this.totalAmount()    
  }

  clear() {
    this.store.dispatch(new ShoppingCartActions.Clear())
    this.totalQuantity()
    this.totalAmount()
  }

  increment(product) {
    this.store.dispatch(new ShoppingCartActions.Increment(product))
    this.totalQuantity()
    this.totalAmount()     
  }

  decrement(product) {
   
    if (product.quantity <= 1){
      console.log("Remove product ID from shoppingcart",product.product._id)
      this.store.dispatch( new ShoppingCartActions.Remove(product.product._id))
    }
    else{
      this.store.dispatch(new ShoppingCartActions.Decrement(product))
    } 
    this.totalQuantity()    
    this.totalAmount()    
  }

  totalQuantity(){   
    this.store.select(store => store.shoppingcart).subscribe(res => this.cart = res)
    let quantity = 0
    this.cart.forEach(item => {
      quantity += item.quantity
    })
    this.store.dispatch( new ShoppingCartActions.Quantity(quantity))
  }

  totalAmount(){
    this.store.select(store => store.shoppingcart).subscribe(res => this.cart = res)
    let amount = 0
    this.cart.forEach(item => {
      amount += item.product.price * item.quantity
    })
    this.store.dispatch(new ShoppingCartActions.Amount(amount))
  }
}
