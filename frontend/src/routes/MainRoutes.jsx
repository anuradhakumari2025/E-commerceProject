import { Route, Routes } from "react-router-dom";
import { lazy, useEffect, useRef, useState } from "react";

const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const Products = lazy(() => import("../pages/Products"));
const CreateProduct = lazy(() => import("../pages/admin/CreateProduct/CreateProduct"));
const ProductDetails = lazy(() => import("../pages/admin/ProductDetails/ProductDetails"));
const UserProfile = lazy(() => import("../pages/user/Profile/UserProfile"));
const Cart = lazy(() => import("../pages/user/Cart/Cart"));
const Wishlist = lazy(() => import("../pages/user/Wishlist"));
const Navbar = lazy(() => import("../components/Navbar/Navbar"));


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
      <Navbar
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        cartRef={cartRef}
        cartButtonRef={cartButtonRef}
      />
      {/* Routes for different pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="admin/create-product" element={<CreateProduct />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
