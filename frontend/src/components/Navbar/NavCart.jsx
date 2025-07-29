import { useNavigate } from "react-router-dom";
import { asyncUpdateProfile } from "../../store/actions/userActions";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const NavCart = ({ user, cartRef, setCartOpen, cartOpen }) => {
  const navigate = useNavigate();
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

  const totalAmount = function () {
    let sum = 0;
    for (let i = 0; i < user.cart.length; i++) {
      sum += user.cart[i].quantity * user.cart[i].product.price;
    }
    return sum;
  };
  return (
    <div className="showCart" ref={cartRef}>
      <div className="bag">
        <i className="ri-shopping-bag-line"></i>
        <p>{user?.cart?.length} Item</p>
      </div>

      {user?.cart?.map((item, id) => (
        <div key={id} className="item">
          <div className="count">
            <i
              className="ri-add-circle-line plus"
              onClick={() => incQuantityHandler(item?.product.id)}
            ></i>
            <span>{item?.quantity}</span>
            <i
              className="ri-indeterminate-circle-fill minus"
              onClick={() => decQuantityHandler(item?.product.id)}
            ></i>
          </div>
          <div className="image">
            <img src={item?.product?.image} alt="" />
          </div>
          <div className="detail">
            <h1>{item?.product?.title}</h1>
            <h4>
              ${item?.product?.price} x {item?.quantity}
            </h4>
            <p>${item?.product?.price * item?.quantity}</p>
          </div>
        </div>
      ))}

      <div className="buttons">
        <button className="price" onClick={() => navigate("/cart")}>
          Checkout Now (${totalAmount()})
        </button>
        <button
          className="view"
          onClick={() => {
            setCartOpen(!cartOpen);
            navigate("/cart");
          }}
        >
          View Cart
        </button>
      </div>
    </div>
  );
};

export default NavCart;
