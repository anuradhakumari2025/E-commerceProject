import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";

const Home = () => {
  const categories = [
    {
      title: "Fashion",
      img: "https://images.unsplash.com/photo-1618886614638-80e3c103d31a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmxhemVyfGVufDB8fDB8fHww",
    },
    {
      title: "Home",
      img: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGluaW5nJTIwdGFibGV8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Electronics",
      img: "https://images.unsplash.com/photo-1542393545-10f5cde2c810?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Beauty",
      img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvc21ldGljfGVufDB8fDB8fHww",
    },
  ];
  // const [showLabel,setShowLabel] =
  const products = useSelector((state) => state.productReducer.products);
  const navigate = useNavigate();
  return (
    <div className="home">
      <div className="banner">
        <h1>
          <i>Fashionable</i> Collection
        </h1>
      </div>

      <section className="categories">
        <h2 className="categories__title">Best selling Categories</h2>
        <div className="categories__grid">
          {categories.map((item, index) => (
            <div className="categoriesCard" key={index}>
              <img src={item.img} alt={item.title} />
              <div
                className="categoriesLabel"
                onClick={() =>
                  navigate(`/products?category=${item.title.toLowerCase()}`)
                }
              >
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h1 className="productsTitle">Best Selling Products</h1>
        <div className="products">
          {products?.length > 0 &&
            products
              ?.slice(0, 8)
              .map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
        </div>
      </section>
      <footer>
        <div>
          <h1>Velouria</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi eum
            repellendus eos aperiam sapiente? Possimus incidunt, autem, fugit
            natus nemo voluptatum nam odit recusandae neque voluptates voluptas
            ratione deserunt dolorum?
          </p>
        </div>
        <div>
          <h2>About Us</h2>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem ipsum dolor sit.</p>
          <p>Lorem, ipsum.</p>
        </div>
        <div>
          <h2>Customer Care</h2>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem ipsum dolor sit.</p>
          <p>Lorem, ipsum.</p>
        </div>
        <div>
          <h2>Contact Us</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis,
            quas!
          </p>
          <p>Email: Lorem, ipsum dolor.</p>
          <p>Phone:3456789086</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
