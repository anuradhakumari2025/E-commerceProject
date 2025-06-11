import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Products = () => {
  const products = useSelector((state) => state.productReducer.products);
  console.log(products);
  return (
    <div className="products">
      {products?.length>0 && products?.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt="" />
          <h1> {product.title} </h1>
          <h2>{product.category} </h2>
          <p>{product.price} </p>
          <p>{product.description} </p>
          <Link to={`/product-details/${product.id}`}>Add To cart</Link>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Products;
