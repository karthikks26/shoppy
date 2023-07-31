import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import "./index.css";

function ProductStore() {
  const { data, isLoading, isError } = useQuery(["products"], () => {
    return Axios.get("https://fakestoreapi.com/products")
      .then((res) => res?.data)
      .catch((error) => {
        throw new Error("Failed to fetch products");
      });
  });

  // Render your component using the fetched 'data' here
  // For example:

  return { data, isLoading, isError };
}

export default ProductStore;
