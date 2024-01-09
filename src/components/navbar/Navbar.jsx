import getProducts from "../../utils/data";
import NavbarCart from "./NavbarCart";

export default function Navbar({ filterBySearch, filterItems, setProducts, categories, handleDeleteCart, cart, handleCheckout }) {
  return (
    <nav className="basis-2/12 md:sticky top-5 h-min">
      <input onChange={filterBySearch} type="text" placeholder="Search" className="input input-bordered w-full max-w-xs" />
      <ul className="menu bg-base-200 w-8/12 rounded-box m-auto gap-1">
        <li>
          <button onClick={() => setProducts(getProducts)}>All</button>
        </li>
        {categories.map((Val, id) => {
          return (
            <li key={id} onClick={() => filterItems(Val)}>
              <button>{Val.charAt(0).toUpperCase() + Val.slice(1)}</button>
            </li>
          );
        })}
      </ul>
      <NavbarCart handleDeleteCart={handleDeleteCart} cart={cart} />
      <div className="flex justify-end gap-5 mt-5">
        <p>Total: </p>
        <p>Rp. {cart.reduce((total, item) => total + item.price, 0)}</p>
        <button className="btn btn-warning btn-xs" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </nav>
  );
}
