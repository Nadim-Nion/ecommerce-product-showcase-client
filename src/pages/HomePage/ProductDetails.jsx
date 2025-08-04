import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../../hook/useCart";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const { addToCart } = useCart();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error("Failed to fetch product:", err));
  }, [id]);

  if (!product) return <p className="text-center mt-20">Loading product...</p>;

  return (
    <div className="container mx-auto p-4">
      <div
        className="grid gap-8
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-2
          2xl:grid-cols-2
          items-center"
      >
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-contain"
          />
        </div>

        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
            {product.title}
          </h1>
          <p className="text-sm text-gray-600 mb-2 capitalize">
            {product.category}
          </p>
          <p className="text-lg font-semibold text-blue-600 mb-2">
            ${product.price}
          </p>
          <p className="text-base mb-4">{product.description}</p>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-yellow-500 font-bold">
              {product.rating?.rate} ★
            </span>
            <span className="text-sm text-gray-500">
              ({product.rating?.count} reviews)
            </span>
          </div>
          <Link to={"/checkout"}>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
