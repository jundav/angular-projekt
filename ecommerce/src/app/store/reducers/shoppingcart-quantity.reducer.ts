import { Actions } from '../actions/shoppingcart.actions'
import { ActionTypes } from '../actiontypes'

const initalState: number = 0

export function ShoppingCartReducerQuantity( state = initalState, action: Actions) {
    switch(action.type){
        case ActionTypes.SHOPPINGCART_QUANTITY:
            return state = action.payload
        
        default:
            return state

    }
      

}