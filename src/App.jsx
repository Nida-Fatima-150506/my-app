import ProductCard from "./ProductCard";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ProductCard title="Laptop" price={850} category="Electronics" />
      <ProductCard title="Running Shoes" price={60} category="Sports" />
    </div>
  );
}

export default App;