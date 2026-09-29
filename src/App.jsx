import ProductCard from "./ProductCard";
import LikeButton from "./LikeButton";

function App() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ProductCard title="Laptop" price={850} category="Electronics" />
        <ProductCard title="Running Shoes" price={60} category="Sports" />
      </div>
      <LikeButton />
    </div>
  );
}

export default App;