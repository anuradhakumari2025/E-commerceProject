import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { asyncRegisterUser } from "../store/actions/userActions";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const registerHandler = (user) => {
    user.id = Date.now();
    user.cart = [];
    console.log(user);
    user.isAdmin = false;
    dispatch(asyncRegisterUser(user));
    navigate("/login");
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit(registerHandler)}>
        <i
          className="close ri-close-large-line"
          onClick={() => navigate('/')}
        ></i>

        <h1>
          Welcome to <span>Velouria</span>
        </h1>
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
        <button>Register</button>
        <p>
          Already have an account?
          <Link className="active" to={"/login"}>
            {" "}
            Login
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default Register;
