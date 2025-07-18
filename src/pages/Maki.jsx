import { useState } from "react";
import MenuCard from "../components/MenuCards";
import IngredientEmojis from "../components/IngredientEmojis";
import "../style/MenuCard.css";

function Maki() {
  const [selectedCardTitle, setSelectedCardTitle] = useState(null);
  const [selectedEmojis, setSelectedEmojis] = useState([]);

  const items = [
  {
    title: "Kappa Maki",
    image: "KappaM.png",
    price: "4.99",
    emojis: ["🥒", "🍚", "🍙", "🌿", "🍱", "🍘", "🧂", "🍥"],
    ingredients: ["Cucumber", "Sushi rice", "Nori (seaweed)", "Rice vinegar", "Sugar", "Salt", "Sesame seeds", "Soy sauce"]
  },
  {
    title: "Avocado Maki",
    image: "AvakadoM.png",
    price: "10.99",
    emojis: ["🥑", "🍚", "🍙", "🍃", "🍥", "🧂", "🍘", "🥢"],
    ingredients: ["Avocado", "Sushi rice", "Nori (seaweed)", "Rice vinegar", "Salt", "Sugar", "Lemon juice", "Soy sauce"]
  },
  {
    title: "Maguro Maki",
    image: "MaguroM.png",
    price: "14.99",
    emojis: ["🐟", "🍚", "🍙", "🍘", "🌊", "🧂", "🍥", "🥢"],
    ingredients: ["Tuna (Maguro)", "Sushi rice", "Nori (seaweed)", "Rice vinegar", "Sugar", "Salt", "Wasabi", "Soy sauce"]
  },
  {
    title: "Sake Maki",
    image: "SakeM.png",
    price: "13.99",
    emojis: ["🐠", "🍚", "🍙", "🍘", "🍥", "🌿", "🧂", "🥢"],
    ingredients: ["Salmon (Sake)", "Sushi rice", "Nori (seaweed)", "Rice vinegar", "Sugar", "Salt", "Wasabi", "Soy sauce"]
  },
  {
    title: "Kane Maki",
    image: "KaneM.png",
    price: "12.99",
    emojis: ["🦀", "🍚", "🍙", "🍘", "🌊", "🍥", "🧂", "🥢"],
    ingredients: ["Crab stick (Kanikama)", "Sushi rice", "Nori (seaweed)", "Mayonnaise", "Rice vinegar", "Salt", "Sugar", "Soy sauce"]
  }
];


  const showSingle = selectedCardTitle !== null;
  const wrapperClass = showSingle ? "card-wrapper single-centered" : "card-wrapper";

  return (
    <div className="relative">
      <h3 className="logo2">Maki Menu</h3>
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

export default Maki;