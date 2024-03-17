import { GET_PRODUCTS_API } from "../utils/constants";
import { useFetch } from "../utils/useFetch";

const Store = () => {
  const values = useFetch(GET_PRODUCTS_API);

  console.log(values);

  return <div>Store</div>;
};
export default Store;
