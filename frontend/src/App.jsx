import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainRoutes from "./routes/MainRoutes";
import { asyncCurrentUser } from "./store/actions/userActions";


const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);

  useEffect(() => {
    !user && dispatch(asyncCurrentUser());
  }, [user]);


  return (
    <>
      <MainRoutes />
    </>
  );
};

export default App;
