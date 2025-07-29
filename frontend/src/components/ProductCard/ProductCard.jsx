import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { asyncUpdateProfile } from "../../store/actions/userActions";
import { toast } from "react-toastify";
import "./ProductCard.css"

const ProductCard = ({ product }) => {
  const [showHeart, setShowHeart] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  // console.log(user)
  const showHeartHandler = () => {
    setShowHeart(true);
  };
  const removeHeartHandler = () => {
    setShowHeart(false);
  };
  const cartHandler = (product) => {
    const copyUser = { ...user, cart: [...user.cart] };
    let idx = copyUser?.cart?.findIndex((c) => c.product._id == product._id);
    if (idx === -1) {
      toast.success("Item added successfully!");
      copyUser.cart.push({ product, quantity: 1 });
    } else {
      copyUser.cart[idx] = {
        product,
        quantity: copyUser.cart[idx].quantity + 1,
      };
    }
    dispatch(asyncUpdateProfile(copyUser));
  };

  const addWishlist = (product) => {
    const copyUser = {
      ...user,
      cart: [...user.cart],
      wishlist: [...user.wishlist],
    };
    toast.success("Item added successfully in wishlist!");
    copyUser.wishlist.push(product);
    // console.log("after push in wishlist", copyUser);
    dispatch(asyncUpdateProfile(copyUser));
  };
  const removeWishlist = (product) => {
    const filteredwishlist = user?.wishlist?.filter(
      (item) => item._id != product._id
    );
    const copyUser = {
      ...user,
      cart: [...user.cart],
      wishlist: [...filteredwishlist],
    };
    toast.error("Item removed successfully from wishlist!");

    dispatch(asyncUpdateProfile(copyUser));
    // console.log("after delete in wishlist", copyUser);
  };
  return (
    <div key={product?._id} className="productCard">
      <div
        className="image"
        onMouseEnter={showHeartHandler}
        onMouseLeave={removeHeartHandler}
      >
        <img src={product?.image} alt="" />
        {showHeart && (
          <>
            <div className="showHeart">
              {/* Input for favourite */}
              {user?.wishlist?.find((f) => f._id == product?._id) ? (
                <i
                  onClick={() => removeWishlist(product)}
                  className="ri-heart-fill"
                  style={{ color: "red" }}
                ></i>
              ) : (
                <i
                  className="ri-heart-line"
                  onClick={() => addWishlist(product)}
                ></i>
              )}

              <i
                className="ri-shopping-cart-2-line"
                onClick={() => cartHandler(product)}
              ></i>
            </div>
            <Link className="active" to={`/product-details/${product?._id}`}>
              <div className="detail">Quick View</div>
            </Link>
          </>
        )}
      </div>
      <p className="category">{product?.category} </p>
      <h1 className="title"> {product?.title} </h1>
      <p className="price">${product?.price} </p>
    </div>
  );
};

export default ProductCard;
