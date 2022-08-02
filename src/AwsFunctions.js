import { PRODUCT_SEARCH_FAIL, PRODUCT_SEARCH_REQUEST, PRODUCT_SEARCH_SUCCESS } from './constants/constants'
import axios from 'axios'

export const fetchData =  (productId) => async (dispatch) => {

    try {
        dispatch({type:PRODUCT_SEARCH_REQUEST})
        console.log("productId", productId);

        const data = await axios.post("https://sjrqslqfkzfamqpbbpmc5i6lji0wddef.lambda-url.us-east-1.on.aws/",{
            "product_id":productId
        });
        
        console.log(data)
        dispatch({type:PRODUCT_SEARCH_SUCCESS, payload:data.data})


    } catch (error) {
        console.log(error.response)
        dispatch({
            type: PRODUCT_SEARCH_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
        })
    }
}