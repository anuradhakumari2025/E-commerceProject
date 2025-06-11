import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./components/Navbar";
import { asyncCurrentUser } from "./store/actions/userActions";
import { asyncLoadProducts } from "./store/actions/productAction";

const App = () => {
 

  const data = useSelector((state) => state);
  // console.log("Data from app.jsx", data);
  const dispatch = useDispatch();

  useEffect(() => {
    // getProducts();
    // getUsers()
    // dispatch(getUsers());
    dispatch(asyncCurrentUser())
    dispatch(asyncLoadProducts())
  }, []);

  return (
    <div>
      <Navbar />
      <MainRoutes />
    </div>
  );
};

export default App;
