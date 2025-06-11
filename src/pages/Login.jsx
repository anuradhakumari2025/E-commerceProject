import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { asyncLoginUser } from "../store/actions/userActions";
const Login = () => {
  
  const dispatch = useDispatch()
  const navigate=useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loginHandler = (user) => {
    console.log(user);
    dispatch(asyncLoginUser(user))
    navigate('/')
  };
  return (
    <div>
      <form onSubmit={handleSubmit(loginHandler)}>
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
          Don't have an account?<Link to={"/register"}>Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
