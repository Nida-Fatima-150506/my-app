import ProductCard from "./ProductCard";
import LikeButton from "./LikeButton";
import StudentList from "./StudentList";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#222" }}>My React App</h1>

      <div className="section">
        <h2>Products</h2>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
          <ProductCard title="Laptop" price={850} category="Electronics" />
          <ProductCard title="Running Shoes" price={60} category="Sports" />
        </div>
      </div>

      <div className="section">
        <LikeButton />
      </div>

      <div className="section">
        <h2>Students</h2>
        <StudentList />
      </div>
    </div>
  );
}

export default App;