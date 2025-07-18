import { useState } from "react";
import MenuCard from "../components/MenuCards";
import IngredientEmojis from "../components/IngredientEmojis";
import "../style/MenuCard.css";

function Nigiri() {
  const [selectedCardTitle, setSelectedCardTitle] = useState(null);
  const [selectedEmojis, setSelectedEmojis] = useState([]);

  const items = [
    {
      title: "Ebi Nigiri",
      image: "EbiN.png",
      emojis: ["🦐", "🍚", "🍣", "✨", "🧂", "🥢", "🍱", "🍋"],
      price: "14.99",
      ingredients: [
        "Boiled shrimp",
        "Sushi rice",
        "Rice vinegar",
        "Sugar",
        "Salt",
        "Wasabi",
        "Soy sauce",
        "Optional nori strip"
      ]
    },
    {
      title: "Tobbiko Nigiri",
      image: "TobbikoN.png",
      emojis: ["🐟", "🍚", "🧡", "🧂", "🥢", "🍱", "🧊", "🌊"],
      price: "13.99",
      ingredients: [
        "Flying fish roe (tobbiko)",
        "Sushi rice",
        "Rice vinegar",
        "Sugar",
        "Salt",
        "Wasabi",
        "Soy sauce",
        "Nori strip"
      ]
    },
    {
      title: "Maguro Nigiri",
      image: "MaguroN.png",
      emojis: ["🐟", "🍣", "🍚", "🔪", "🥢", "🍱", "🧂", "🌊"],
      price: "15.99",
      ingredients: [
        "Tuna",
        "Sushi rice",
        "Rice vinegar",
        "Sugar",
        "Salt",
        "Wasabi",
        "Soy sauce",
        "Optional nori strip"
      ]
    },
    {
      title: "Sake Nigiri",
      image: "SakeN.png",
      emojis: ["🐟", "🍣", "🍚", "🥢", "🧂", "✨", "🍋", "🍱"],
      price: "13.49",
      ingredients: [
        "Salmon",
        "Sushi rice",
        "Rice vinegar",
        "Sugar",
        "Salt",
        "Wasabi",
        "Soy sauce",
        "Optional nori strip"
      ]
    },
    {
      title: "Unagi Nigiri",
      image: "UnagiN.png",
      emojis:  ["🦑", "🍣", "🍚", "🔥", "🍶", "🍯", "🧂", "🍱"],
      price: "16.99",
      ingredients: [
        "Grilled eel",
        "Sushi rice",
        "Rice vinegar",
        "Sugar",
        "Salt",
        "Wasabi",
        "Soy sauce",
        "Optional nori strip"
      ]
    },
  ];

  const showSingle = selectedCardTitle !== null;
  const wrapperClass = showSingle ? "card-wrapper single-centered" : "card-wrapper";

  return (
    <div className="relative">
      <h3 className="logo2">Nigiri Menu</h3>
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

export default Nigiri;
