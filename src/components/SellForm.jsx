import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { postItems } from "../utils/ApiRequests";

function SellForm({ categories }) {
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState(null);
  const [itemUploaded, setItemUploaded] = useState("Pease Complete Form");
  const [hasCategoryBeenHandled, setHasCategoryBeenHandled] = useState(false);

  if (!hasCategoryBeenHandled && categories.length > 0){
    setHasCategoryBeenHandled(true)
    setCategory(categories[0].category_name)
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
    setItemUploaded("Uploading...")
    postItems({    
      "item_name": itemName,
      "description": description,
      "img_url": imgUrl,
      "price": Number(price),
      "category_name": category
    }).then((data)=>{
      setItemUploaded("Product uploaded...");
    }).catch((err)=>{
      setItemUploaded(err.response.data.msg)
    })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <fieldset>
        <Form.Group className="mb-3" >
          <Form.Label htmlFor="item_name">Item name *</Form.Label>
          <Form.Control id="item_name" placeholder="Item name" required 
          value={itemName}
          onChange={(event)=>{setItemName(event.target.value)}}
          />
          <Form.Label htmlFor="description">Description</Form.Label>
          <Form.Control id="description" placeholder="Description" value={description}
          onChange={(event)=>{setDescription(event.target.value)}}
          />
          <Form.Label htmlFor="img_url">Image URL *</Form.Label>
          <Form.Control id="img_url" placeholder="Image URL" required value={imgUrl}
          onChange={(event)=>{setImgUrl(event.target.value)}}
          />
          <Form.Label htmlFor="price" >Price *</Form.Label>
          <Form.Control id="price" placeholder="Price" type="number" required value={price}
          onChange={(event)=>{setPrice(event.target.value)}}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="categories_name">Category *</Form.Label>
          <Form.Select required id="categories_name"
          onChange={(event)=>{setCategory(event.target.value)}}>
            {categories.map((category) => {
              return (
                <option key={category.category_name}>
                  {category.category_name}
                </option>
              );
            })}
          </Form.Select>
        </Form.Group>
        <p>{itemUploaded}</p>
        <Button type="submit">Submit</Button>
      </fieldset>
    </Form>
  );
}

export default SellForm;
