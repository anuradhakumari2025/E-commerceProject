import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { asyncLogoutUser } from "../store/actions/userActions";

const Navbar = () => {
  let user = useSelector((state) => state.userReducer.user);
  // console.log(user);
  const dispatch = useDispatch()

  //Logout handler function
  const logoutHandler = () =>{
    dispatch(asyncLogoutUser(user))
  }
  return (
    <nav>
      <NavLink
        className={(e) => (e.isActive ? "active" : "notActive")}
        to={"/"}
      >
        <h5>Home</h5>
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "active" : "notActive")}
        to={"/products"}
      >
        <h5>Products</h5>
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "active" : "notActive")}
        to={"/login"}
      >
        <h5>Login</h5>
      </NavLink>
      {user && (
        <>
        <NavLink
          className={(e) => (e.isActive ? "active" : "notActive")}
          to={"/admin/create-product"}
        >
          <h5>Create</h5>
        </NavLink>
        <button onClick={logoutHandler}>Logout</button>
        </>
      )}
    </nav>
  );
};

export default Navbar;
