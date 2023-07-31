import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { CartContext } from "../CartContent";
import { useContext } from "react";
function ProductCard(props) {
  const product = props.product;
  const cart = useContext(CartContext);
  const ProductQuantity = cart.getProductQuantity(product.id);

  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card.Img
        variant="top"
        style={{ height: "200px", width: "200px" }}
        src={product.image}
      />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <h4>${product.price}</h4>
        {ProductQuantity > 0 ? (
          <>
            <Form as={Row}>
              <Col sm="6">
                <Form.Label>In Cart: {ProductQuantity}</Form.Label>
              </Col>
              <Col sm="6">
                <Button
                  onClick={() => cart.addOneToCart(product.id)}
                  className="mx-2"
                >
                  +
                </Button>
                <Button
                  onClick={() => cart.removeOneFromCart(product.id)}
                  className="mx-2"
                >
                  -
                </Button>
              </Col>
            </Form>
            <Button
              variant="danger"
              onClick={() => cart.deleteFromCart(product.id)}
              className="mx-2"
            >
              Remove from Cart
            </Button>
          </>
        ) : (
          <Button
            variant="primary"
            onClick={() => cart.addOneToCart(product.id)}
          >
            Add to Cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
