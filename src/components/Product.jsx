import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { deleteItem } from '../utils/ApiRequests';
import { useState } from 'react';

function Product({title, price, imgUrl,id}) {
    const [hasItemBeenDeleted, setHasItemBeenDeleted] = useState(false);
    return ( <> 
    {
        !hasItemBeenDeleted ? 
       <>
        <Image src={imgUrl} fluid thumbnail/>
        <div className='product-detail'>
        <div className="fw-bold">{title}</div>
            <p>£{price}</p>
            <div>
                <Button key={'Buy Product'}variant="primary">Buy Product</Button>
                <Button key={'Remove Product'} variant="danger" onClick={(event)=>{
                    deleteItem(id)
                    .then(()=>setHasItemBeenDeleted(true));
                }}>Remove Product</Button>
            </div>
        </div> 
        </>
        : <p>Product removed</p>
      
    }
       </>)
}

export default Product;