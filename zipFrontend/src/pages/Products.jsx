import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Products = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");
  const title = queryParams.get("title");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const products = useSelector((state) => state.productReducer.products);

  useEffect(() => {
    if (category) {
      const result = products.filter((item) => item.category == category);
      setFilteredProducts(result);
    } else if (title) {
      const result = products.filter((item) =>
        item.title.toLowerCase().includes(title.toLowerCase())
      );
      setFilteredProducts(result);
    } else {
      setFilteredProducts(products);
    }
  }, [category,title,products]);


  return (
    <>
      <h1 className="productsTitle">Best Selling Products</h1>
      <div className="products">
        {products?.length > 0 &&
          filteredProducts?.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </>
  );
};

export default Products;
