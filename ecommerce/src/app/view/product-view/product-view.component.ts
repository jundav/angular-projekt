import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { IState } from 'src/app/models/istate.model';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/iproduct.model';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  public productdk: IProduct

  constructor(private router: ActivatedRoute, private productService: ProductService, private store: Store<IState>, private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.productService.clear()
    this.productService.getById(this.router.snapshot.params.id)
    this.store.select(store => store.product).subscribe(res=> this.productdk = res)
  }

  addToCart(productdk, quantity = 1) {
     this.shoppingCartService.add(productdk, quantity) 
  } 

}

