import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SellForm({ categories }) {
  console.log(categories);
  return (
    <Form>
      <fieldset>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="item_name">Item name *</Form.Label>
          <Form.Control id="item_name" placeholder="Item name" required />
          <Form.Label htmlFor="description">Description</Form.Label>
          <Form.Control id="description" placeholder="Description" />
          <Form.Label htmlFor="img_url">Image URL *</Form.Label>
          <Form.Control id="img_url" placeholder="Image URL" required />
          <Form.Label htmlFor="price" >Price *</Form.Label>
          <Form.Control id="price" placeholder="Price" type="number" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="categories_name">Category *</Form.Label>
          <Form.Select id="categories_name">
            {categories.map((category) => {
              return (
                <option key={category.category_name}>
                  {category.category_name}
                </option>
              );
            })}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            id="disabledFieldsetCheck"
            label="Can't check this"
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </fieldset>
    </Form>
  );
}

export default SellForm;
