import { Actions } from '../actions/product-catalog.action'
import { ActionTypes } from '../actiontypes'
import { IProduct } from '../../models/iproduct.model'


const initalState: Array<IProduct> = []

export function ProductCatalogReducer( state = initalState, action : Actions){
    switch(action.type){
        case ActionTypes.PRODUCTCATALOG_SET:
            return state = action.payload
        case ActionTypes.PRODUCTCATALOG_CLEAR:
            return state =  initalState
        default:
            return state
    }
}