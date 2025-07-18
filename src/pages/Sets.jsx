import { useState } from "react";
import MenuCard from "../components/MenuCards";
import IngredientEmojis from "../components/IngredientEmojis";
import "../style/MenuCard.css";

function SushiSets() {
  const [selectedCardTitle, setSelectedCardTitle] = useState(null);
  const [selectedEmojis, setSelectedEmojis] = useState([]);

  const items = [
    {
      title: "Princess Sushi Set",
      image: "sets.png",
      price: "14.99",
      emojis: ["👸", "🍣", "🍱", "🥢", "🌿", "🍚", "🧊"],
      ingredients: ["Sushi rice", "Fish", "Seaweed", "Vegetables"],
    },
    {
      title: "King Sushi Set",
      image: "sets1.png",
      price: "16.99",
      emojis: ["🤴", "🍣", "🍱", "🥢", "🌿", "🍚", "🧊"],
      ingredients: ["Sushi rice", "Fish", "Seaweed", "Vegetables"],
    },
    {
      title: "Queen Sushi Set",
      image: "sets2.png",
      price: "15.99",
      emojis: ["👑", "🍣", "🍱", "🥢", "🌿", "🍚", "🧊"],
      ingredients: ["Sushi rice", "Fish", "Seaweed", "Vegetables"],
    },
  ];

  const showSingle = selectedCardTitle !== null;
  const wrapperClass = showSingle ? "card-wrapper single-centered" : "card-wrapper";

  return (
    <div className="relative">
      <h3 className="logo2">Sushi Sets Menu</h3>
      <div className={wrapperClass}>
        {items.map(item => {
          const isSelected = selectedCardTitle === item.title;
          if (!isSelected && showSingle) return null;
          return (
            <MenuCard
              key={item.title}
              {...item}
              isSelected={isSelected}
              onView={() => {
                setSelectedCardTitle(item.title);
                setSelectedEmojis(item.emojis || []);
              }}
              onClose={() => {
                setSelectedCardTitle(null);
                setSelectedEmojis([]);
              }}
            />
          );
        })}
      </div>

      {selectedEmojis.length > 0 && (
        <IngredientEmojis emojis={selectedEmojis} />
      )}
    </div>
  );
}

export default SushiSets;
