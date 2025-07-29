import { useDispatch, useSelector } from "react-redux";
import { loadlazyproduct } from "../store/reducers/productSlice";
import { useEffect, useState } from "react";
import axios from "../api/axiosconfig";

const useInfiniteProducts = () => {
  const dispatch = useDispatch();
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1); // track current page

  const products = useSelector((state) => state.productReducer.products);

  const fetchProducts = async () => {
    try {
      const limit = 8;
      const { data } = await axios.get(`/products?page=${page}&limit=${limit}`);

      if (data.length == 0) {
        setHasMore(false);
      } else {
        dispatch(loadlazyproduct(data));
        setPage((prev) => prev + 1); // move to next page
        setHasMore(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return { products, hasMore, fetchProducts };
};

export default useInfiniteProducts;
