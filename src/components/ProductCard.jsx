import { Button } from "react-bootstrap";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <img src={product.image} alt={product.title} className="w-full h-40 object-cover rounded mb-4" />
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-gray-700">{product.price}€</p>
      <Button onClick={() => addToCart(product)} variant="success">
        Ajouter au panier
      </Button>
    </div>
  );
}

export default ProductCard;
