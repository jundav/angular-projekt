import { Actions } from '../actions/shoppingcart.actions'
import { ActionTypes } from '../actiontypes'
import { IShoppingCart } from 'src/app/models/Ishoppingcart.model'


const initialState: Array<IShoppingCart> = []

export function ShoppingcartReducer( state = initialState, action : Actions){

    switch(action.type){

        
        case ActionTypes.SHOPPINGCART_ADD:
            return [...state, action.payload]

        case ActionTypes.SHOPPINGCART_REMOVE:
            console.log(state.filter(item => item.product._id))
            return state =  state.filter(item => item.product._id !== action.payload)

        case ActionTypes.SHOPPINGCART_CLEAR:
            return state = initialState

        case ActionTypes.SHOPPINGCART_INCREMENT:
               let indexItem = state.findIndex(product => { return product.product._id === action.payload.product._id})
               return state.map((item,index) => { 
                   if (index !== indexItem){
                      return item
                   } else{                       
                       let newItem = {product: item.product, quantity: item.quantity + 1}
                       return newItem
                   }
               })
        case ActionTypes.SHOPPINGCART_DECREMENT:
            let indexdec = state.findIndex(pro => { return pro.product._id === action.payload.product._id})
            return state.map((item,index) => {
                if(index !== indexdec){
                    return item
                }else{
                    let newItem = {product:item.product, quantity:item.quantity - 1}
                    return newItem
                }
            })    

        default:
            return state
    }
}