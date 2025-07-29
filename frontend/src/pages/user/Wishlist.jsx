import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard/ProductCard";

const Wishlist = () => {
  const user = useSelector((state) => state.userReducer.user);
  // console.log(user)
  return user?.wishlist?.length > 0 ? (
    <>
      <h1 className="productsTitle">Your Wishlist</h1>

      <div className="products">
        {user?.wishlist?.length > 0 &&
          user?.wishlist?.map((item) => (
            <ProductCard product={item} key={item._id} />
          ))}
      </div>
    </>
  ) : (
    <h1 className="nothingInCart">No item in Wishlist</h1>
  );
};

export default Wishlist;
