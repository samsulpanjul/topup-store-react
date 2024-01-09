import React from "react";
import Card from "./Card";

function CardList({ products, handleAddCart }) {
  return (
    <div className="grid gap-5 basis-9/12 justify-items-center justify-center md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <Card key={product.id} {...product} handleAddCart={handleAddCart} />
      ))}
    </div>
  );
}

export default CardList;
