import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainRoutes from "./routes/MainRoutes";
import { asyncCurrentUser } from "./store/actions/userActions";
import { asyncLoadProducts } from "./store/actions/productAction";

const App = () => {
   const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);

  useEffect(() => {
    dispatch(asyncCurrentUser())
    dispatch(asyncLoadProducts())
  }, []);

  return (
    <>
      <MainRoutes />
    </>
  );
};

export default App;
