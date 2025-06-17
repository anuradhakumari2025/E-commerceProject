import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { asyncLoginUser } from "../store/actions/userActions";
import { useEffect } from "react";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let user = useSelector((state) => state.userReducer.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

    const loginHandler = (user) => {
    dispatch(asyncLoginUser(user)); // only dispatch, don’t navigate yet
  };

  useEffect(() => {
    if (user) {
      navigate("/products");
    }
  }, [user, navigate]); // redirect only when user exists in redux
  return (
    <div className="login">
      <form onSubmit={handleSubmit(loginHandler)}>
        <i
          className="close ri-close-large-line"
          onClick={() => navigate('/')}
        ></i>

        <h1>
          Welcome to <span>Velouria</span>
        </h1>
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
        <button>Login</button>
        <p>
          Don't have an account?{" "}
          <Link className="active" to={"/register"}>
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
