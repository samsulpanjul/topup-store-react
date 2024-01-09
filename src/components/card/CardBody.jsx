export default function CardBody({ name, description, price, handleAddCart }) {
  return (
    <div className="card-body">
      <h2 className="card-title">{name}</h2>
      <p>{description}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary text-base" onClick={() => handleAddCart({ name, price })}>
          Rp. {price}
        </button>
      </div>
    </div>
  );
}
