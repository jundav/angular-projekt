import { Actions } from '../actions/product.actions'
import { ActionTypes } from '../actiontypes'
import { IProduct } from '../../models/iproduct.model'


const initalState: IProduct = {}

export function ProductReducer( state = initalState, action : Actions){
    switch(action.type){
        case ActionTypes.PRODUCT_SET:
            return state = action.payload
        case ActionTypes.PRODUCT_CLEAR:
            return state =  initalState
        default:
            return state
    }
}