import { useEffect } from "react";
import { useFakeStoreApi } from "../hooks/useFakeStoreApi";

const Home = () => {
  const { data, loading, error, getProducts } = useFakeStoreApi();

  useEffect(() => {
    getProducts();
  }, []);

  return <h1>Home</h1>;
};

export default Home;
