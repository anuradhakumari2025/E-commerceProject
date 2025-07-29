import { useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useInfiniteProducts from "../utils/useInfiniteProducts";

const ProductCard = lazy(() => import("../components/ProductCard/ProductCard"));

const Products = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");
  const title = queryParams.get("title");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { products, hasMore, fetchProducts } = useInfiniteProducts();

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
  }, [category, title, products]);

  return (
    products?.length > 0 && (
      <InfiniteScroll
        dataLength={products.length}
        next={fetchProducts}
        hasMore={hasMore}
        endMessage={
          <p style={{ textAlign: "center", color: "red" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <h1 className="productsTitle">Best Selling Products</h1>
        <div className="products">
          {filteredProducts?.map((product) => (
            <Suspense key={product._id} fallback={<h1>Loading...</h1>}>
              <ProductCard product={product} />
            </Suspense>
          ))}
        </div>
      </InfiniteScroll>
    )
  );
};

export default Products;
