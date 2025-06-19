import { useDispatch, useSelector } from "react-redux";
import { asyncUpdateProfile } from "../store/actions/userActions";
import { toast } from "react-toastify";

const CartCard = ({ item }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);

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
    if (copyUser.cart[index].quantity > 1) {
      copyUser.cart[index] = {
        ...copyUser.cart[index],
        quantity: copyUser.cart[index].quantity - 1,
      };
    } else {
      toast.error(`${copyUser.cart[index].product.title} removed from cart`);
      copyUser.cart.splice(index, 1);
    }
    dispatch(asyncUpdateProfile(copyUser.id, copyUser));
    // console.log(copyUser);
  };

  const deleteItem = (productId) => {
    let copyUser = { ...user, cart: [...user.cart] };
    const index = user.cart.findIndex((item) => item.product.id == productId);
    toast.error(`${copyUser.cart[index].product.title} removed from cart`);
    copyUser.cart.splice(index, 1);
    dispatch(asyncUpdateProfile(copyUser.id, copyUser));
  };

  return (
    <div className="cartCard">
      <div className="image">
        <img src={item?.product?.image} alt="" />
      </div>
      <div className="about">
        <h2>{item?.product?.title} </h2>
        <h3>{item?.product?.category.toUpperCase()}</h3>
        <p>
          ${item?.product?.price} x {item?.quantity}
          <span className="total">
            = ${item?.product?.price * item?.quantity}
          </span>
        </p>
      </div>
      <div className="cardRight">
        <i
          className="ri-close-large-line"
          onClick={() => deleteItem(item?.product.id)}
        ></i>
        <div className="quantity">
          <i
            className="ri-checkbox-indeterminate-fill minus"
            onClick={() => decQuantityHandler(item?.product.id)}
          ></i>
          {item?.quantity}
          <i
            className="ri-add-box-line plus"
            onClick={() => incQuantityHandler(item?.product.id)}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
