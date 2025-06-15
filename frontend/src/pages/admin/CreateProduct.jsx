import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncCreateProduct } from "../../store/actions/productAction";

const CreateProduct = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //Create Product Handler Function
  const createProductHandler = (product) => {
    product.id = Date.now();
    // console.log(product);
    dispatch(asyncCreateProduct(product))
    navigate("/products");
  };

  return (
    <div className="createProduct">
      <form onSubmit={handleSubmit(createProductHandler)}>
        <i
          className="close ri-close-large-line"
          onClick={() => navigate("/")}
        ></i>
        <h1>
          Welcome to <span>Velouria</span>
        </h1>
        {/* image Input field */}
        <div className="image">
          <p>Image:-</p>
          <input
            {...register("image", {
              required: "*Please add image url",
            })}
            type="url"
            placeholder="Image url"
          />
          {errors?.image?.message && (
            <small className="error">{errors.image.message}</small>
          )}
        </div>

        {/* title Input field */}
        <div className="title">
          <p>Name:-</p>
          <input
            {...register("title", {
              required: "*Please add title",
            })}
            type="text"
            placeholder="title"
          />
          {errors?.title?.message && (
            <small className="error">{errors.title.message}</small>
          )}
        </div>

        {/* price Input field */}
        <div className="price">
          <p>Price:-</p>
          <input
            {...register("price", {
              required: "*Please add price",
            })}
            type="number"
            placeholder="price"
          />
          {errors?.price?.message && (
            <small className="error">{errors.price.message}</small>
          )}
        </div>

        {/* category Input field */}
        <div className="category">
          <p>Category:-</p>
          <select
            className=""
            {...register("category", {
              required: "*Please add category",
            })}
            placeholder="lskdjfl"
          >
            <option value="">All Categories</option>
            <option value="fashion">Fashion</option>
            <option value="electronics">Electronics</option>
            <option value="home" >Home</option>
            <option value="beauty" >Beauty</option>
          </select>
          {errors?.category?.message && (
            <small className="error">{errors.category.message}</small>
          )}
        </div>

        {/* description Input field */}
        <div className="description">
          <p>Description:-</p>
          <textarea
            {...register("description", {
              required: "*Please add description",
            })}
            // type="text"
            placeholder="description"
            rows={6}
          ></textarea>
          {errors?.description?.message && (
            <small className="error">{errors.description.message}</small>
          )}
        </div>
        <button>Create</button>
      </form>
    </div>
  );
};

export default CreateProduct;
