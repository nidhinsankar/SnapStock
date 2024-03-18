import { Product } from "../utils/type";

const ProductCard = ({
  image,
  title,
  id,
  category,
  description,
  price,
  rating,
}: Product) => {
  return (
    <div key={id} className="border-2 rounded-md w-[250px]">
      <img src={image} alt="product-image" className="w-full" />
      <h2>{title}</h2>
      <h2>{category}</h2>
      <p>{price}</p>
      {/* <p>{description}</p> */}
      <p>
        {rating.count} -- {rating.rate}
      </p>
    </div>
  );
};

export default ProductCard;
