import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const products = useSelector((state) => state.productReducer.products);

  return (
    <>
      <h1 className="productsTitle">Best Selling Products</h1>
      <div className="products">
        {products?.length > 0 &&
          products?.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </>
  );
};

export default Products;
