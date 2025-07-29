import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  asyncDeleteProduct,
  asyncLoadProducts,
  asyncUpdateProduct,
} from "../../../store/actions/productAction";
import { asyncUpdateProfile } from "../../../store/actions/userActions";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./ProductDetails.scss"

const ProductDetails = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.productReducer.products);
  const user = useSelector((state) => state.userReducer.user);
  const [showForm, setShowForm] = useState(false);
  // console.log(products)
  // console.log(user);
  const dispatch = useDispatch();
  const product = products.find((item) =>item._id === id);
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

  const addToCartHandler = (product) => {
    // console.log(product)
    const copyUser = { ...user, cart: [...user.cart] };
    // console.log(copyUser);
    let idx = copyUser?.cart?.findIndex((c) => c.product._id == product._id);
    if (idx === -1) {
      copyUser.cart.push({ product, quantity: 1 });
    } else {
      copyUser.cart[idx] = {
        product,
        quantity: copyUser.cart[idx].quantity + 1,
      };
    }
    // console.log("after push in cart", copyUser);
    toast.success("Item added successfully")
    dispatch(asyncUpdateProfile(copyUser));
  };

  //Update Product Handler Function
  const updateProductHandler = (product) => {
    // console.log(product);
    dispatch(asyncUpdateProduct(id, product));
    setShowForm(false)
  };

  const deleteHandler = () => {
    dispatch(asyncDeleteProduct(id));
    navigate("/products");
    setShowForm(false)
  };
   useEffect(() => {
    dispatch(asyncLoadProducts());
  }, [dispatch]);

  return (
    <>
      <div className="product-modal">
        <div className="modal-content">
          {/* Left Side - Image Section */}
          <div className="image-section">
            <img
              src={product?.image}
              alt="Yellow Sweater"
              className="main-image"
            />

            <div className="thumbnail-row">
              <div className="thumbnail selected">
                <img src={product?.image} alt="thumb1" />
              </div>
              <div className="thumbnail">
                <img src={product?.image} alt="thumb2" />
              </div>
            </div>
          </div>

          {/* Right Side - Details Section */}
          <div className="details-section">
            <h2 className="product-title">{product?.title}</h2>

            <p>
              <span className="label">Brand: </span>
              <span className="value">Ziaomi</span>
            </p>
            <p>
              <span className="label">Category: </span>
              <span className="value">{product?.category} </span>
            </p>
            <p>
              <span className="label">Desciption: </span>
              <span className="value">{product?.description} </span>
            </p>

            <p className="rating-row">
              <span className="label">Rated: </span>
              <span className="stars">
                {[...Array(5)].map((_, i) => (
                  <i className="ri-star-line" key={i} color="#ffc107"></i>
                ))}
              </span>
              <span className="rating-count">(50)</span>
            </p>

            <p className="price">${product?.price}</p>
            <p className="stock-status">Stock Available</p>
            <p className="seller">
              <span className="label">Sold By: </span>
              <span className="value">Mobile Store</span>
            </p>
           {!user?.isAdmin && <button
              className="add-to-cart"
              onClick={() => addToCartHandler(product)}
            >
              Add to Cart
            </button>}
            {user?.isAdmin && (
              <button className="update" onClick={() => setShowForm(true)}>
                Update Product
              </button>
            )}
            
          </div>
        </div>
      </div>
      {showForm && (
        /* Form to update product by admin */
        <div className="updateProduct">
          <form onSubmit={handleSubmit(updateProductHandler)}>
            <i
              className="close ri-close-large-line"
              onClick={() => setShowForm(false)}
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
            <button className="update">Update</button>
            <button className="delete" type="button" onClick={deleteHandler}>
              Delete
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
