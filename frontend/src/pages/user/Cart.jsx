import { useDispatch, useSelector } from "react-redux";
import { asyncUpdateProfile } from "../../store/actions/userActions";
import CartCard from "../../components/CartCard";

const Cart = () => {
  const user = useSelector((state) => state.userReducer.user);
  // console.log(user);

  return (
    <div className="carts">
      <div className="left">
        {user?.cart?.map((item, id) => (
          <CartCard item={item} key={id} />
        ))}
      </div>
      <div className="right">
        <div className="total">
          <span>Total:</span>
          <span className="amount">$460.00</span>
        </div>
        <hr />
        <div className="comments">
          <h2>
            Additional Comments <span>Note</span>
          </h2>
          <textarea rows={5} name="" id=""></textarea>
        </div>
        <input type="text" placeholder="Voucher" />
        <button>Apply Voucher</button>
        <hr />
        <div className="delivery">
          <h1>Shipping Estimates</h1>
          <p className="state">State</p>
          <select name="" id="">
            <option value="">Select State</option>
            <option value="Bihar">Bihar</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="UP">UP</option>
            <option value="Karnataka">Karnataka</option>
            <option value="WestBengal">West Bengal</option>
          </select>
          <p className="pincode">Pin Code</p>
          <input type="number" className="pin" placeholder="Pin code" />
          <button className="calculate">Calculate Shipping</button>
          <button className="checkout">Checkout Now</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
