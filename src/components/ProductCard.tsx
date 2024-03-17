interface CardProps {
  image: string;
  title: string;
  id: number;
  category: string;
  description: string;
  price: number;
}
const ProductCard = ({
  image,
  title,
  id,
  category,
  description,
  price,
}: CardProps) => {
  return (
    <div key={id} className="border-2 rounded-md">
      <img src={image} alt="product-image" />
      <h2>{title}</h2>
      <h2>{category}</h2>
      <p>{price}</p>
    </div>
  );
};

export default ProductCard;
