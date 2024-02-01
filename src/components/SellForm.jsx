import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SellForm({ categories }) {
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("Choose category");
  const [itemUploaded, setItemUploaded] = useState(false);

  const handleSubmit = (event)=>{
    event.preventDefault();
    console.log(event.target);
    console.log(itemName)
    console.log(description)
    console.log(imgUrl)
    console.log(typeof price)
    console.log(category)
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
          <Form.Select id="categories_name"
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
        <Button type="submit">Submit</Button>
      </fieldset>
    </Form>
  );
}

export default SellForm;
