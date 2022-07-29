import * as AWS from 'aws-sdk'
import { PRODUCT_SEARCH_FAIL, PRODUCT_SEARCH_REQUEST, PRODUCT_SEARCH_SUCCESS } from './constants/constants'



const configuration = {
    region: "us-east-1",
    secretAccessKey: "neepWxavipoEXiz+pvhWdH4p639VV/q85pDL825v",
    accessKeyId: "AKIAXNDEUJTJ5WUM6SAQ"
  }
  
AWS.config.update(configuration)
  
const doClient = new AWS.DynamoDB.DocumentClient()

export const fetchData =  (tableName, productId) => async (dispatch, getState) => {

    try {
        dispatch({type:PRODUCT_SEARCH_REQUEST})

        let params = {
            TableName: tableName,
            FilterExpression: 'contains (product_id, :v1)',
            ExpressionAttributeValues:{
                ':v1': productId
            }
        }

        let result = await doClient.scan(params).promise()
        console.log(...result.Items)
        let i=0
        let data = [...result.Items]
        while(result.LastEvaluatedKey!==null){
            params = {
                TableName: tableName,
                ExclusiveStartKey: result.LastEvaluatedKey,
                FilterExpression: 'contains (product_id, :v1)',
                ExpressionAttributeValues:{
                    ':v1': productId
                }
            }
            result = await doClient.scan(params).promise();
            console.log(i++, data.length);
            if(result.Count!==0){
                data.push(...result.Items)
            }
            if(data.length>100 || i===1000){
                break;
            }
            
        }
        dispatch({type:PRODUCT_SEARCH_SUCCESS, payload:data})


    } catch (error) {
        console.log(error.response)
        dispatch({
            type: PRODUCT_SEARCH_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
        })
    }
}