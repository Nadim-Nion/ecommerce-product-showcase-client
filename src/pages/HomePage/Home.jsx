import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">All Products</h1>

      <div
        className="grid gap-6
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-6"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-xl shadow-md p-4 flex flex-col justify-between hover:shadow-xl transition-shadow"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain mb-4"
            />
            <h2 className="text-base font-semibold mb-2 line-clamp-2">
              {product.title}
            </h2>
            <p className="text-lg font-bold text-blue-600 mb-2">
              ${product.price}
            </p>
            <Link
              to={`/product/${product.id}`}
              className="mt-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-center"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
