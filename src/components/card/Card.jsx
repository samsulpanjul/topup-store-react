import CardBody from "./CardBody";
import CardImage from "./CardImage";

export default function Card({ image, category, name, description, price, handleAddCart }) {
  return (
    <div className="card card-compact w-80 bg-base-100 shadow-xl">
      <CardImage image={image} category={category} />
      <CardBody name={name} description={description} price={price} handleAddCart={handleAddCart} />
    </div>
  );
}
