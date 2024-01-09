export default function CardImage({ image, category }) {
  return (
    <figure>
      <img src={image} alt={category} />
    </figure>
  );
}
