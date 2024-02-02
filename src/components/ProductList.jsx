import { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Product from "./Product";
import { getItems } from "../utils/ApiRequests";
import { useSearchParams } from "react-router-dom";

function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  // useEffect(() => {
  //   console.log(searchParams.get("category"));
  // }, [searchParams]);

  const [allItems, setAllItems] = useState([]);
  useEffect(() => {
    // console.log(searchParams)
    getItems(searchParams).then((data) => setAllItems(data.items));
  }, []);

  return (
    <ListGroup as="ul">
      {allItems.map((item) => {
        return (
          <ListGroup.Item key={item.item_id} as="li" className="product-item">
            <Product
              title={item.item_name}
              price={item.price}
              imgUrl={item.img_url}
            />
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}

export default ProductList;
