
import ListGroup from 'react-bootstrap/ListGroup';
import Product from './Product';
import listData from '../assets/data/itemListExample.json';

function ProductList() {
  return (
    <ListGroup as="ol" numbered>
        {listData.items.map((item)=>{
        return <ListGroup.Item key={item.item_id} as="li" className="d-flex justify-content-between align-items-start">
                <Product title={item.item_name} price={item.price} imgUrl={item.img_url} />
            </ListGroup.Item>
        })}
    </ListGroup>
  );
}

export default ProductList;