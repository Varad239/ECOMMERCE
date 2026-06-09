function Cart() {
  const cart =
    JSON.parse(localStorage.getItem("cart")) || [];

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div className="container">
      <h1>Cart</h1>

      {cart.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
        </div>
      ))}

      <h2>Total: ₹{total}</h2>
    </div>
  );
}

export default Cart;