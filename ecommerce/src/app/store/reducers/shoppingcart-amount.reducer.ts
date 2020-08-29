import { Actions } from '../actions/shoppingcart.actions'
import { ActionTypes } from '../actiontypes'

const intialState: number = 0

export function ShoppingCartReducerAmount(state = intialState, action: Actions){
    switch(action.type){
        case ActionTypes.SHOPPINGCART_AMOUNT:
            return state = action.payload

        default:
            return state
    }
}