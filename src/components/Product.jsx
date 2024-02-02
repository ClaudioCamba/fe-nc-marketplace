import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

function Product({title, price, imgUrl}) {
    return (
    <>
    <Image src={imgUrl} fluid thumbnail/>
    <div className='product-detail'>
    <div className="fw-bold">{title}</div>
        <p>£{price}</p>
        <Button variant="primary">Buy Now</Button>{' '}
    </div>
    </>
    )
}

export default Product;