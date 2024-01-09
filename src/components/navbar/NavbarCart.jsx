export default function NavbarCart({ handleDeleteCart, cart }) {
  return (
    <div className="mt-5 -ms-10">
      <h1 className="text-2xl">Cart</h1>
      <table className="table-auto border-collapse w-full">
        <thead className="border-b border-slate-500">
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => {
            return (
              <tr key={item.id} className="border-b border-slate-700">
                <td>{item.name}</td>
                <td className="px-2 py-1">Rp. {item.price}</td>
                <td className="text-center">
                  <button className="btn btn-xs btn-error" onClick={() => handleDeleteCart(item.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
