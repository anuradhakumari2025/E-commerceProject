import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  asyncDeleteProduct,
  asyncUpdateProduct,
} from "../../store/actions/productAction";

const ProductDetails = () => {
  const { id } = useParams();
  // const products = useSelector((state) => state.productReducer.products);
  // console.log(products)
  const {
    productReducer: { products },
    userReducer: { user },
  } = useSelector((state) => state);
  console.log(user);
  const dispatch = useDispatch();
  const product = products.find((item) => item.id == id);
  // console.log(product);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: product?.title,
      image: product?.image,
      description: product?.description,
      category: product?.category,
      price: product?.price,
    },
  });

  const updateProductHandler = (product) => {
    console.log(product);
    dispatch(asyncUpdateProduct(id, product));
  };

  const deleteHandler = () => {
    dispatch(asyncDeleteProduct(id));
    navigate("/products");
  };
  return (
    <>
      <div className="productDetails">
        <img src={product?.image} alt="" />
        <h1> {product?.title} </h1>
        <h2>{product?.category} </h2>
        <p>{product?.price} </p>
        <p>{product?.description} </p>
        <button>Add To Cart</button>
      </div>

      {user &&
        user?.isAdmin &&
          /* Form to update product by admin */
        (
          <div className="updateProduct">
            <form onSubmit={handleSubmit(updateProductHandler)}>
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
                <p>Title:-</p>
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
                <p>price:-</p>
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
                <input
                  {...register("category", {
                    required: "*Please add title",
                  })}
                  type="text"
                  placeholder="category"
                />
                {errors?.category?.message && (
                  <small className="error">{errors.category.message}</small>
                )}
              </div>

              {/* description Input field */}
              <div className="description">
                <p>description:-</p>
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
              <button>Update</button>
              <button type="button" onClick={deleteHandler}>
                Delete
              </button>
            </form>
          </div>
        )}
    </>
  );
};

export default ProductDetails;
