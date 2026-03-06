/*import "../styles/ServiceCard.css"
export default function ServiceCard({ image, title, description }) {
  return (
    <div className="service-card">
      {image && <img src={image} alt={title} />}
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Know More</button>
    </div>
  );
}
  */
 import { useState } from "react";
import "../styles/ServiceCard.css";

export default function ServiceCard({ image, title, description }) {

  const [showFull, setShowFull] = useState(false);

  return (
    <div className="service-card">
      {image && <img src={image} alt={title} />}
      
      <h3>{title}</h3>

      {/* Description */}
      <p>
        {showFull ? description : description?.substring(0, 60) + "..."}
      </p>

      <button onClick={() => setShowFull(!showFull)}>
        {showFull ? "Show Less" : "Know More"}
      </button>
    </div>
  );
}