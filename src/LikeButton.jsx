import { useState } from "react";

function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <button
        onClick={() => setLikes(likes + 1)}
        style={{
          padding: "10px 20px",
          fontSize: "18px",
          cursor: "pointer",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#e0245e",
          color: "white",
        }}
      >
        ❤️ Like
      </button>
      <h3>Total Likes: {likes}</h3>
    </div>
  );
}

export default LikeButton;