import { useDispatch, useSelector } from "react-redux";
import { loadlazyproduct } from "../store/reducers/productSlice";
import { useEffect, useState } from "react";
import axios from "../api/axiosconfig"

const useInfiniteProducts = () => {
    const dispatch = useDispatch()
  const [hasMore, setHasMore] = useState(false);

    const products = useSelector((state) => state.productReducer.products);

    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(
          `/products?_start=${products.length}&_limit=8`
        );
        if (data.length == 0) {
          setHasMore(false);
        } else {
          // setProducts((prev) => [...prev, ...data]); // Use functional update
          dispatch(loadlazyproduct(data))
          setHasMore(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(()=>{
      fetchProducts()
    },[])
  return {products,hasMore,fetchProducts}
}

export default useInfiniteProducts