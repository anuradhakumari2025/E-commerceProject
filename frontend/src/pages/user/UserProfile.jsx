import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  asyncDeleteUser,
  asyncLogoutUser,
  asyncUpdateProfile,
} from "../../store/actions/userActions";
import { useEffect, useState } from "react";

const UserProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  // console.log(user);
  const [showEdit, setShowEdit] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: user?.username,
      email: user?.email,
      password: user?.password,
    },
  });

  const deleteProfileHandler = () => {
    dispatch(asyncDeleteUser(user.id));
    navigate("/");
  };

  const updateProfileHandler = (loginedUser) => {
    dispatch(asyncUpdateProfile(user.id, loginedUser));
    // navigate("/login");
  };

  //Logout handler function
  const logoutHandler = () => {
    dispatch(asyncLogoutUser(user));
    navigate("/");
  };
  const handleFormClick = (e) => {
    if (e.target.className === "editProfile") {
      setShowEdit(false);
    }
  };

  useEffect(() => {}, [user]);
  return (
    <>
      <div className="profile-page">
        <aside className="sidebar">
          <div className="section">
            <h4>DASHBOARD</h4>
            <ul>
              <li>
                <i className="ri-shopping-bag-fill icon"></i> Orders
                <span>5</span>
              </li>
              <li>
                <i className="ri-heart-line icon"></i> Wishlist <span>19</span>
              </li>
            </ul>
          </div>
          <div className="section">
            <h4>ACCOUNT SETTINGS</h4>
            <ul>
              <li className="active">
                <i className="ri-user-line icon"></i> Profile Info{" "}
                <span>3</span>
              </li>
              <li>
                <i className="ri-home-9-fill icon"></i> Addresses{" "}
                <span>16</span>
              </li>
            </ul>
          </div>
        </aside>

        <main className="profile-content">
          <header className="profile-header">
            <h2>My Profile</h2>
            <div className="btns">
              <button className="edit-btn" onClick={() => setShowEdit(true)}>
                Edit Profile
              </button>
              <button onClick={logoutHandler} className="logout">
                Logout
              </button>
            </div>
          </header>

          <section className="status-cards">
            <div className="card">
              <h3>{user?.username.toUpperCase()}</h3>
              <p className="balance">
                Balance: <span>$500</span>
              </p>
            </div>

            <div className="card">
              <h3>16</h3>
              <p>All Orders</p>
            </div>

            <div className="card">
              <h3>01</h3>
              <p>Awaiting Delivery</p>
            </div>
          </section>

          <section className="profile-details">
            <div>
              <label>Username</label>
              <p>{user?.username}</p>
            </div>
            <div>
              <label>Email</label>
              <p>{user?.email}</p>
            </div>
            <div>
              <label>Phone</label>
              <p>(445) 653-3771 x985</p>
            </div>
          </section>
        </main>
      </div>

      {showEdit && (
        <div className="editProfile" onClick={handleFormClick}>
          <form onSubmit={handleSubmit(updateProfileHandler)} className="form">
            <i
              className="close ri-close-large-line"
              onClick={() => setShowEdit(false)}
            ></i>

            {/* User Name Input field */}
            <div className="username">
              <p>Name:-</p>
              <input
                {...register("username", {
                  required: "*Please add username",
                })}
                type="text"
                placeholder="Username"
              />
              {errors?.username?.message && (
                <small className="error">{errors.username.message}</small>
              )}
            </div>

            {/* Email Input field */}
            <div className="email">
              <p>Email:-</p>
              <input
                {...register("email", {
                  required: "*Please add email",
                })}
                type="email"
                placeholder="Email"
              />
              {errors?.email?.message && (
                <small className="error">{errors.email.message}</small>
              )}
            </div>

            {/* Password Input field */}
            <div className="password">
              <p>Password:-</p>
              <input
                {...register("password", {
                  required: "*Please add password",
                })}
                type="password"
                placeholder="password"
              />
              {errors?.password?.message && (
                <small className="error">{errors.password.message}</small>
              )}
            </div>
            <button className="update">Update Profile</button>
            {user && !user?.isAdmin && (
              <button
                onClick={deleteProfileHandler}
                type="button"
                className="delete"
              >
                Delete Account
              </button>
            )}
          </form>
        </div>
      )}
    </>
  );
};

export default UserProfile;
