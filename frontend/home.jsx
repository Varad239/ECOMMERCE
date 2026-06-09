import { useState } from "react";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products] = useState([
    {
      id: 1,
      name: "Laptop",
      price: 50000,
      image: "https://via.placeholder.com/200"
    },
    {
      id: 2,
      name: "Phone",
      price: 20000,
      image: "https://via.placeholder.com/200"
    },
    {
      id: 3,
      name: "Headphones",
      price: 3000,
      image: "https://via.placeholder.com/200"
    }
  ]);

  const addToCart = (product) => {
    const cart =
      JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    alert("Added To Cart");
  };

  return (
    <div className="container">
      <h1>Products</h1>

      <div className="grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;