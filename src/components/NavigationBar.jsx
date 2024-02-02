import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavigationBar({ categories }) {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">C&D Marketplace</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/search">All Products</Nav.Link>
            <Nav.Link href="/sell">Sell Product</Nav.Link>
            <NavDropdown title="Category" id="collapsible-nav-dropdown">
              {categories.map((category) => {
                return (
                  <NavDropdown.Item
                    href={`/search?category_name=${category.category_name}`}
                    key={category.category_name}
                  >
                    {category.category_name}
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
