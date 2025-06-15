import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  let user = useSelector((state) => state.userReducer.user);
  // console.log(user);
  const [showCart, setShowCart] = useState(false);

  const handleFormClick = (e) => {
    if (e.target.className !== "showCart") {
      setShowCart(false);
    }
  };

  useEffect(() => {}, [user]);
  return (
    <nav>
      <h1 className="title">Velouria</h1>
      {user ? (
        <>
          <div className="searchbar-container">
            <button className="search-button">
              <i className="ri-search-line"></i>
            </button>
            <input
              type="text"
              placeholder="Search and hit enter..."
              className="search-input"
            />
            <select className="category-dropdown">
              <option>All Categories</option>
              <option>Fashion</option>
              <option>Electronics</option>
              <option>Home</option>
              <option>Beauty</option>
            </select>
          </div>

          <div className="user">
            {user.isAdmin && (
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
              <i className="ri-user-line"></i>
            </NavLink>
            <NavLink
              className={(e) => (e.isActive ? "active" : "notActive")}
              to={"/cart"}
            >
              <i className="ri-shopping-cart-2-line cart">
                <div className="cartCount">
                  <p>3</p>
                </div>
              </i>
              {showCart && (
                <div className="showCart" onClick={handleFormClick}>
                  <div className="bag">
                    <i className="ri-shopping-bag-line"></i>
                    <p>3 Item</p>
                  </div>
                  <div className="item">
                    <div className="count">
                      <div className="plus">+</div>
                      <span>1</span>
                      <div className="minus">-</div>
                    </div>
                    <div className="image">
                      <img
                        src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGFudHxlbnwwfHwwfHx8MA%3D%3D"
                        alt=""
                      />
                    </div>
                    <div className="detail">
                      <h1>Lorem, ipsum dolor.</h1>
                      <h4>$120 x 1</h4>
                      <p>$200.0</p>
                    </div>
                  </div>
                  <div className="buttons">
                    <button className="price">Checkout Now ($460.00)</button>
                    <button className="view">View Cart</button>
                  </div>
                </div>
              )}
            </NavLink>
          </div>
        </>
      ) : (
        <>
          <NavLink
            className={(e) => (e.isActive ? "active" : "notActive")}
            to={"/"}
          >
            <h5>Home</h5>
          </NavLink>
          <NavLink
            className={(e) => (e.isActive ? "active" : "notActive")}
            to={"/login"}
          >
            <h5>Login</h5>
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default Navbar;
