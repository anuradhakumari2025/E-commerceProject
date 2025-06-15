import { useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [showHeart, setShowHeart] = useState(false);
  const showHeartHandler = () => {
    setShowHeart(true);
  };
  const removeHeartHandler = () => {
    setShowHeart(false);
  };
  return (
    <div key={product.id} className="productCard">
      <div
        className="image"
        onMouseEnter={showHeartHandler}
        onMouseLeave={removeHeartHandler}
      >
        <img src={product.image} alt="" />
        {showHeart && (
          <>
            <div className="showHeart">
              <i className="ri-heart-line"></i>
              <i className="ri-shopping-cart-2-line"></i>
            </div>
            <div className="detail">
              <Link className="active" to={`/product-details/${product.id}`}>
                Quick View
              </Link>
            </div>
          </>
        )}
      </div>
      <p className="category">{product.category} </p>
      <h1 className="title"> {product.title} </h1>
      <p className="price">${product.price}.00 </p>
    </div>
  );
};

export default ProductCard;
