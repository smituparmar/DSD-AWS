import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table';

function HomeScreen() {

  const searchData = useSelector(state => state.searchData)
  const {error, data} = searchData
  

  useEffect(() => {

  }, [data]);

  return (
    <div>
      {!error && data.length!==0 && (<h1 className='mb-5'>Product Name: {data[0].product_title}</h1>)}
      <Table striped className='border'>
        <thead >
          <tr>
            <th>#</th>
            <th>star rating</th>
            <th>customer_id</th>
            <th>review_title</th>
            <th>review_date</th>
            <th>review_body</th>
          </tr>
        </thead>
        <tbody>
          {!error && data.map((d,i) => (
            <tr>
              <td>{i+1}</td>
              <td>{d.star_rating}</td>
              <td>{d.customer_id}</td>
              <td>{d.review_headline}</td>
              <td>{d.review_date}</td>
              <td>{d.review_body}</td>
            </tr>
          ))}
        </tbody> 
      </Table>  
    </div>
  )
}

export default HomeScreen