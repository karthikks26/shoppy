import { Col, Row } from "react-bootstrap";
import ProductStore from "../ProductStore";
import ProductCard from "../Components/ProductCard";

import "../index.css";
function Store() {
  const { data, isLoading, isError } = ProductStore();
  if (isLoading) {
    return <h3 className="text-center">Loading..... Please wait</h3>;
  }

  if (isError) {
    return <div>Error: Failed to fetch products</div>;
  }
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Welcome to the Store!</h1>
      <Row xs={1} md={3} className="g-4">
        {data.map((product) => (
          <Col align="center">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Store;
