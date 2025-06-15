import { useDispatch } from "react-redux";

const CartCard = ({ item }) => {
  const dispatch = useDispatch();

  const incQuantityHandler = (productId) => {
    let copyUser = { ...user, cart: [...user.cart] };
    const index = user.cart.findIndex((item) => item.product.id == productId);
    copyUser.cart[index] = {
      ...copyUser.cart[index],
      quantity: copyUser.cart[index].quantity + 1,
    };
    dispatch(asyncUpdateProfile(copyUser.id, copyUser));
  };
  const decQuantityHandler = (productId) => {
    let copyUser = { ...user, cart: [...user.cart] };
    const index = user.cart.findIndex((item) => item.product.id == productId);
    if (copyUser.cart[index].quantity > 0) {
      copyUser.cart[index] = {
        ...copyUser.cart[index],
        quantity: copyUser.cart[index].quantity - 1,
      };
    } else {
      copyUser.cart.splice(index, 1);
    }
    dispatch(asyncUpdateProfile(copyUser.id, copyUser));

    // console.log(copyUser);
  };
  return (
    <div className="cartCard">
      <div className="image">
        <img src={item?.product?.image} alt="" />
      </div>
      <div className="about">
        <h2>{item?.product?.title} </h2>
        <p>
          $200 x 1 <span className="total">= ${item?.product?.price}</span>
        </p>
      </div>
      <div className="cardRight">
        <i className="ri-close-large-line"></i>
        <div className="quantity">
          <div
            className="minus"
            onClick={() => decQuantityHandler(item?.product.id)}
          >
            -
          </div>
          {item?.quantity}
          <div
            className="plus"
            onClick={() => incQuantityHandler(item?.product.id)}
          >
            +{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
