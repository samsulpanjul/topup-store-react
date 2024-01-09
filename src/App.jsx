import { useState } from "react";
import CardList from "./components/card/CardList";
import Navbar from "./components/navbar/Navbar";
import getProducts from "./utils/data";

function App() {
  const [products, setProducts] = useState(getProducts);
  const categories = [...new Set(getProducts.map((Val) => Val.category))];
  const [cart, setCart] = useState([]);

  // filter items by search
  const filterBySearch = (e) => {
    const query = e.target.value;
    let updatedList = [...getProducts];

    updatedList = updatedList.filter((product) => {
      return product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setProducts(updatedList);
  };

  // filter items by categories / button
  const filterItems = (curcat) => {
    const newItem = getProducts.filter((newVal) => {
      return newVal.category === curcat;
    });
    setProducts(newItem);
  };

  const handleAddCart = (product) => {
    const newCart = [
      ...cart,
      {
        id: cart.length + 1,
        ...product,
      },
    ];
    setCart(newCart);
  };

  const handleDeleteCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;
    setCart([]);
    alert("Terima Kasih!");
  };

  return (
    <div className="flex flex-col md:flex-row justify-center py-10 relative">
      <Navbar filterBySearch={filterBySearch} filterItems={filterItems} setProducts={setProducts} categories={categories} handleDeleteCart={handleDeleteCart} cart={cart} handleCheckout={handleCheckout} />
      <CardList products={products} handleAddCart={handleAddCart} />
    </div>
  );
}

export default App;
