import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, title: "Produit 1", price: 20, image: "https://via.placeholder.com/150" },
  { id: 2, title: "Produit 2", price: 30, image: "https://via.placeholder.com/150" },
];

function HomePage() {
  return (
    <div className="p-4">
      <h1>Nos Produits</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
