function ProductCard({ title, price, category }) {
  return (
    <div
      style={{
        border: "2px solid #4a90e2",
        borderRadius: "10px",
        padding: "20px",
        margin: "15px",
        width: "250px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        backgroundColor: "#f9f9f9",
        color: "#222",
      }}
    >
      <h2>{title}</h2>
      <p>Price: ${price}</p>
      <p>Category: {category}</p>
    </div>
  );
}

export default ProductCard;