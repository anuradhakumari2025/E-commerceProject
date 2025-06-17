import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const MobileMenu = () => {
  let user = useSelector((state) => state.userReducer.user);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="mobileMenu">
      {!showMobileMenu && (
        <i className="ri-menu-fill" onClick={() => setShowMobileMenu(true)}></i>
      )}
      {showMobileMenu && (
        <>
          <i
            onClick={() => setShowMobileMenu(false)}
            className="ri-close-large-line"
          ></i>
          <div className="showMenu">
            {user && (
              <>
                {user?.isAdmin && (
                  <NavLink
                    className={(e) => (e.isActive ? "active" : "notActive")}
                    to={"/admin/create-product"}
                  >
                    <h4>Create</h4>
                  </NavLink>
                )}
                <NavLink
                  className={(e) => (e.isActive ? "active" : "notActive")}
                  to={"/products"}
                >
                  <h4> Products</h4>
                </NavLink>

                <NavLink
                  className={(e) => (e.isActive ? "active" : "notActive")}
                  to={"/user-profile"}
                >
                  <h4>Profile</h4>
                </NavLink>
                <NavLink
                  className={(e) => (e.isActive ? "active" : "notActive")}
                  to={"/wishlist"}
                >
                  <h4>Wishlist</h4>
                </NavLink>

                <NavLink
                  className={(e) => (e.isActive ? "active" : "notActive")}
                  to={"/cart"}
                >
                  <h4>Cart</h4>
                </NavLink>
              </>
            )}
            {!user && (
              <>
                <NavLink
                  className={(e) => (e.isActive ? "active" : "notActive")}
                  to={"/"}
                >
                  <h4>Home</h4>
                </NavLink>
                <NavLink
                  className={(e) => (e.isActive ? "active" : "notActive")}
                  to={"/login"}
                >
                  <h4>Login</h4>
                </NavLink>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default MobileMenu;
