import { 
    PRODUCT_SEARCH_REQUEST,
    PRODUCT_SEARCH_SUCCESS,
    PRODUCT_SEARCH_FAIL,
    PRODUCT_SEARCH_RESET
 } from '../constants/constants'


export const searchReducer = (state={data:[]} , action) => {
    switch(action.type){
        case PRODUCT_SEARCH_REQUEST:
            return {...state, loading:true}
        case PRODUCT_SEARCH_SUCCESS:{
            return {loading:false, data:action.payload, status:200}
        }
        case PRODUCT_SEARCH_FAIL:{
            return {loading:false, error:action.payload, status:400}
        }
        case PRODUCT_SEARCH_RESET:{
            return {data:[]}
        }
        default:
            return state
    }
}