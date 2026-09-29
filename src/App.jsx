import ProductCard from "./ProductCard";
import LikeButton from "./LikeButton";
import StudentList from "./StudentList";

function App() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ProductCard title="Laptop" price={850} category="Electronics" />
        <ProductCard title="Running Shoes" price={60} category="Sports" />
      </div>
      <LikeButton />
      <StudentList />
    </div>
  );
}

export default App;