import ProductStore from "./ProductStore";
function getProductData(id) {
  const { data, isLoading, isError } = ProductStore();

  let productData = data.find((product) => product.id === id);

  if (productData == undefined) {
    console.log("Product data does not exist for ID: " + id);
    return undefined;
  }

  return productData;
}
export default getProductData;
