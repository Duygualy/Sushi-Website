import { useState } from "react";
import MenuCard from "../components/MenuCards";
import IngredientEmojis from "../components/IngredientEmojis";
import "../style/MenuCard.css";

function Classic() {
  const [selectedCardTitle, setSelectedCardTitle] = useState(null);
  const [selectedEmojis, setSelectedEmojis] = useState([]);

  const items = [
    {
      title: "California Roll",
      image: "California.png",
      emojis: ["🥑", "🍚", "🥒", "🦀", "🌊", "🍣", "🍱", "🍋"],
      price: "14.99",
      ingredients: [
        "Avocado",
        "Rice",
        "Cucumber",
        "Crab",
        "Seaweed",
        "Sushi Vinegar",
        "Nori",
        "Lemon"
      ]
    },
    {
      title: "Philedelphia Roll",
      image: "Philedelphia.png",
      emojis: ["🧀", "🍚", "🥒", "🐟", "🌊", "🍣", "🍱", "🍋"],
      price: "13.99",
      ingredients: [
        "Cream Cheese",
        "Rice",
        "Cucumber",
        "Salmon",
        "Seaweed",
        "Sushi Vinegar",
        "Nori",
        "Lemon"
      ]
    },
    {
      title: "Spicy Tuna Roll",
      image: "Spicy.png",
      emojis: ["🌶️", "🍚", "🐟", "🥒", "🌊", "🍣", "🍱", "🍋"],
      price: "15.99",
      ingredients: [
        "Spicy Sauce",
        "Rice",
        "Tuna",
        "Cucumber",
        "Seaweed",
        "Sushi Vinegar",
        "Nori",
        "Lemon"
      ]
    },
    {
      title: "Dragon Roll",
      image: "Dragon Roll.png",
      emojis: ["🐉", "🍚", "🥒", "🦐", "🌊", "🍣", "🍱", "🍋"],
      price: "16.99",
      ingredients: [
        "Eel",
        "Rice",
        "Cucumber",
        "Shrimp",
        "Seaweed",
        "Sushi Vinegar",
        "Nori",
        "Lemon"
      ]
    },
  ];

  const showSingle = selectedCardTitle !== null;
  const wrapperClass = showSingle ? "card-wrapper single-centered" : "card-wrapper";

  return (
    <div className="relative">
      <h3 className="logo2">Classic Sushi Menu</h3>
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

export default Classic;
