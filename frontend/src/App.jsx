import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./components/Navbar";
import { asyncCurrentUser } from "./store/actions/userActions";
import { asyncLoadProducts } from "./store/actions/productAction";

const App = () => {
   const dispatch = useDispatch();

  useEffect(() => {
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
