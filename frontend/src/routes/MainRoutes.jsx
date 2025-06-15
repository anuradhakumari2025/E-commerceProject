import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Products from "../pages/Products";
import CreateProduct from "../pages/admin/CreateProduct";
import ProductDetails from "../pages/admin/ProductDetails";
import UserProfile from "../pages/user/UserProfile";
import Cart from "../pages/user/Cart";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/user-profile" element={<UserProfile/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="admin/create-product" element={<CreateProduct/>}/>
      <Route path="/product-details/:id" element={<ProductDetails/>}/>
    </Routes>
  );
};

export default MainRoutes;
