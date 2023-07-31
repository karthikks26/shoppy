import { useState } from "react";
import { Button, Container, Navbar, Modal } from "react-bootstrap";
import { CartContext } from "../CartContent";
import { useContext } from "react";
function NavbarComponent() {
  const cart = useContext(CartContext);
  const [show, setShow] = useState(false);
  const handleclose = () => setShow(false);
  const handleshow = () => setShow(true);
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href="/">Shoppy</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={handleshow}>Cart ({productsCount} Items)</Button>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
export default NavbarComponent;
