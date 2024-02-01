import Badge from 'react-bootstrap/Badge';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

function Product({title, price, imgUrl}) {
    return (
    <>
            
    <div className="product-item ms-2 me-auto">
    <Image src={imgUrl} fluid thumbnail/>
    <div className='product-detail'>
        <div className="fw-bold">{title}</div>
            <p>£{price}</p>
            <Button variant="primary">Buy Now</Button>{' '}
        </div>
    </div>
    {/* <Badge bg="primary" pill>14</Badge> */}
        
    </>

    )
}

export default Product;