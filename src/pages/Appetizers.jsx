import { useState } from "react";
import MenuCard from "../components/MenuCards";
import IngredientEmojis from "../components/IngredientEmojis";
import "../style/MenuCard.css";

function Appetizers() {
  const [selectedCardTitle, setSelectedCardTitle] = useState(null);
  const [selectedEmojis, setSelectedEmojis] = useState([]);

  const items = [
    {
      title: "Edamame",
      image: "Edamame.png",
      price: "10.99",
      emojis: ["🥑", "🌱", "🧂", "🍽️", "🥢", "🫛", "🧊", "🍋"],
      ingredients: ["Soybean", "Salt", "Lemon", "Ice"],
    },
    {
      title: "Spicy Edamame",
      image: "Appetizers.png",
      price: "13.99",
      emojis: ["🌶️", "🥑", "🧂", "🍽️", "🥢", "🫛", "🧊", "🍋"],
      ingredients: ["Soybean", "Chili", "Salt", "Lemon", "Ice"],
    },
    {
      title: "Shrimp Chips",
      image: "Shrimp.png",
      price: "9.99",
      emojis: ["🍤", "🥔", "🧂", "🍽️", "🥢", "🌾", "🧊", "🍋"],
      ingredients: ["Shrimp", "Potato", "Rice", "Salt", "Lemon", "Ice"],
    },
    {
      title: "Steamed Dumplings",
      image: "Steamed.png",
      price: "14.99",
      emojis: ["🥟", "🍖", "🌾", "🧅", "🧂", "🍽️", "🥢", "🧊"],
      ingredients: ["Dumpling wrapper", "Pork", "Rice", "Onion", "Salt", "Ice"],
    },
    {
      title: "Fried Dumplings",
      image: "Fried.png",
      price: "12.99",
      emojis: ["🥟", "🍗", "🌾", "🧅", "🧂", "🍽️", "🥢", "🔥"],
      ingredients: ["Dumpling wrapper", "Chicken", "Rice", "Onion", "Salt"],
    },
  ];

  const showSingle = selectedCardTitle !== null;
  const wrapperClass = showSingle ? "card-wrapper single-centered" : "card-wrapper";

  return (
    <div className="relative">
      <h3 className="logo2">Appetizers Menu</h3>
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

export default Appetizers;
