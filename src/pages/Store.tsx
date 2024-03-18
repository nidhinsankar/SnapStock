import ProductCard from "../components/ProductCard";
import { GET_PRODUCTS_API } from "../utils/constants";
import { useFetch } from "../utils/useFetch";

const Store = () => {
  const productList = useFetch(GET_PRODUCTS_API);

  console.log(productList);

  return (
    <div className="grid grid-cols-3 gap-3">
      {productList?.map((product) => (
        <ProductCard {...product} />
      ))}
    </div>
  );
};
export default Store;
