
import { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Product from './Product';
import listData from '../assets/data/itemListExample.json';
import { getItems } from '../utils/ApiRequests';


function ProductList() {
  const [allItems, setAllItems] = useState([]);
  useEffect(()=>{
    getItems()
    .then((data)=>setAllItems(data.items))
    console.log('test')
  },[allItems])
 
  return (
    <ListGroup as="ol" numbered>
        {allItems.map((item)=>{
        return <ListGroup.Item key={item.item_id} as="li" className="d-flex justify-content-between align-items-start">
                <Product title={item.item_name} price={item.price} imgUrl={item.img_url} />
            </ListGroup.Item>
        })}
    </ListGroup>
  );
}

export default ProductList;