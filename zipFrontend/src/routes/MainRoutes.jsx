import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Products from "../pages/Products";
import CreateProduct from "../pages/admin/CreateProduct";
import ProductDetails from "../pages/admin/ProductDetails";
import UserProfile from "../pages/user/UserProfile";
import Cart from "../pages/user/Cart";
import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Wishlist from "../pages/user/Wishlist";
const MainRoutes = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const cartRef = useRef(null);
  const cartButtonRef = useRef(null);

  // Close cart if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        cartRef.current &&
        !cartRef.current.contains(event.target) &&
        cartButtonRef.current &&
        !cartButtonRef.current.contains(event.target)
      ) {
        setCartOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <>
      <Navbar   cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        cartRef={cartRef}
        cartButtonRef={cartButtonRef} />
      {/* Routes for different pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="admin/create-product" element={<CreateProduct />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
