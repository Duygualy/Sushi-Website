import "../style/MenuCard.css";
import IngredientEmojis from "./IngredientEmojis";
import { useRef, useEffect, useState } from "react";

function MenuCard({ title, image, price, ingredients = [], emoji, isSelected, onView, onClose }) {
  const emojiArray = emoji ? Array(8).fill(emoji) : [];

  const cardRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 300, height: 400 });

  useEffect(() => {
    if (cardRef.current) {
      const { offsetWidth, offsetHeight } = cardRef.current;
      setDimensions({ width: offsetWidth, height: offsetHeight });
    }
  }, [isSelected]);

  return (
    <div className={`crazy-card ${isSelected ? "selected" : ""}`} style={{ position: "relative" }} ref={cardRef}>
      {isSelected && <button onClick={onClose} className="close-btn">x</button>}

      {emoji && <IngredientEmojis emojis={emojiArray} cardWidth={dimensions.width} cardHeight={dimensions.height} />}

      <div className="card-image">
        <img src={image} alt={title} />
      </div>

      <div className="card-info">
        <h3>{title}</h3>
        <p>${price}</p>
        {!isSelected && (
          <button className="view-btn" onClick={() => onView(title)}>View</button>
        )}
      </div>

      {isSelected && ingredients.length > 0 && (
        <div className="ingredients">
          <h4>Ingredients:</h4>
          <ul>
            {ingredients.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}


export default MenuCard;
