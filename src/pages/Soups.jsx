import { useState } from "react";
import MenuCard from "../components/MenuCards";
import IngredientEmojis from "../components/IngredientEmojis";
import "../style/MenuCard.css";

function Soups() {
  const [selectedCardTitle, setSelectedCardTitle] = useState(null);
  const [selectedEmojis, setSelectedEmojis] = useState([]);

  const items = [
    {
      title: "Miso Soup",
      image: "Soups.png",
      price: "14.99₺",
      emojis: ["🍲", "🧅", "🥬", "🧄", "🍄", "🌱", "🥢", "🧂"],
      ingredients: ["Miso paste", "Onion", "Cabbage", "Garlic", "Mushroom", "Herbs", "Salt"]
    },
    {
      title: "Spicy Sour Soup",
      image: "SpicyS.png",
      price: "16.99₺",
      emojis: ["🌶️", "🍋", "🧅", "🥕", "🧄", "🍄", "🥢", "🧂"],
      ingredients: ["Chili", "Lemon", "Onion", "Carrot", "Garlic", "Mushroom", "Salt"]
    },
    {
      title: "Tom Yam Soup",
      image: "Tom.png",
      price: "15.99₺",
      emojis: ["🍋", "🦐", "🧅", "🥬", "🧄", "🍄", "🥢", "🧂"],
      ingredients: ["Lemon", "Shrimp", "Onion", "Cabbage", "Garlic", "Mushroom", "Salt"]
    }
  ];

  const showSingle = selectedCardTitle !== null;
  const wrapperClass = showSingle ? "card-wrapper single-centered" : "card-wrapper";

  return (
    <div className="relative">
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

export default Soups;
