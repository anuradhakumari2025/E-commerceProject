import { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import NavCart from "./NavCart";
import "./Navbar.scss"

const Navbar = ({ cartOpen, setCartOpen, cartRef, cartButtonRef }) => {
  let user = useSelector((state) => state.userReducer.user);
  // console.log(user);
  const navigate = useNavigate();

  const handleCategoryChange = (e) => {
    if (e.target.value) {
      navigate(`/products?category=${e.target.value}`);
    }
  };
  const handleSearch = (e) => {
    if (e.key == "Enter" && e.target.value.trim()) {
      navigate(`/products?title=${e.target.value}`);
    }
  };

  useEffect(() => {
    // console.log("Mount");
    return () => {
      // console.log("Unmount");
    };
  }, [user]);
  return (
    <nav>
      <h1 className="title" onClick={() => navigate("/")}>
        Velouria
      </h1>
      {/* If there user exist */}
      {user ? (
        <>
          {/* Search Bar through name */}
          <div className="searchbar-container">
            <button className="search-button">
              <i className="ri-search-line"></i>
            </button>
            <input
              type="text"
              placeholder="Search and hit enter..."
              className="search-input"
              onKeyDown={handleSearch}
            />
            {/* Search throuh category */}
            <select
              onChange={handleCategoryChange}
              className="category-dropdown"
            >
              <option value="" disabled>
                Select Category
              </option>
              <option value="fashion">Fashion</option>
              <option value="electronics">Electronics</option>
              <option value="beauty">Beauty</option>
              <option value="home">Home</option>
            </select>
          </div>

          <div className="user">
            {/* Create product if user is admin */}
            {user.isAdmin && (
              <NavLink
                className={(e) => (e.isActive ? "active" : "notActive")}
                to={"/admin/create-product"}
              >
                <h4>Create</h4>
              </NavLink>
            )}
            {/* if there is user */}
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
              <i className="ri-user-line"></i>
            </NavLink>
            <NavLink
              className={(e) => (e.isActive ? "active" : "notActive")}
              to={"/wishlist"}
            >
              <div className="cartWrapper">
                <i className="ri-heart-fill cart" style={{ color: "red" }}></i>
                <div className="cartCount">
                  <p>{user?.wishlist?.length}</p>
                </div>
              </div>
            </NavLink>
            <div className="cartWrapper" ref={cartButtonRef}>
              <i
                className="ri-shopping-cart-2-line cart"
                onClick={() => setCartOpen(!cartOpen)}
              ></i>

              <div className="cartCount">
                <p>{user?.cart?.length}</p>
              </div>

              {cartOpen && <NavCart user={user} cartRef={cartRef} setCartOpen={setCartOpen} cartOpen={cartOpen}/>}
            </div>

            {/* </NavLink> */}
          </div>
        </>
      ) : (
        <div className="notUser">
          {/* When user not exist */}
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
        </div>
      )}

      {/* Mobile Menu */}
      <MobileMenu />
    </nav>
  );
};

export default Navbar;
