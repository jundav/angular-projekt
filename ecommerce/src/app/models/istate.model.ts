import { IProduct } from './iproduct.model';
import { IShoppingCart } from './Ishoppingcart.model';

export interface IState {
    readonly productcatalog: Array<IProduct>
    readonly product: IProduct
    readonly shoppingcart: Array<IShoppingCart>
    readonly shoppingcartQuantity: number
    readonly shoppingcartAmount: number

}