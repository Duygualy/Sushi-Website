import { useState } from "react";
import MenuCard from "../components/MenuCards";
import IngredientEmojis from "../components/IngredientEmojis";
import "../style/MenuCard.css";

function Noodles() {
  const [selectedCardTitle, setSelectedCardTitle] = useState(null);
  const [selectedEmojis, setSelectedEmojis] = useState([]);

  const items = [
    {
      title: "Chicken Noodles",
      image: "ChickenN.png",
      price: "5.99",
      ingredients: [
        "Grilled chicken breast",
        "Fresh pasta",
        "Colorful vegetables",
        "Soy sauce",
        "Garlic and ginger",
        "Green onion"
      ],
      emojis: ["🍗", "🥦", "🧄", "🍜", "🌶️", "🥢",  "🥕"]
    },
    {
      title: "Beef Noodles",
      image: "BeefN.png",
      price: "6.99",
      ingredients: [
        "Tender beef",
        "Udon noodles",
        "Carrot and onion",
        "Special beef sauce",
        "Sesame oil",
        "Fresh coriander"
      ],
      emojis: ["🥩", "🥕", "🧅", "🍜", "🌿", "🥢", "🌶️"]
    },
    {
      title: "Veggie Noodles",
      image: "VeggieN.png",
      price: "4.99",
      ingredients: [
        "Fresh green vegetables",
        "Broccoli and zucchini",
        "Colorful peppers",
        "Teriyaki sauce",
        "Mushrooms",
        "Sesame"
      ],
      emojis: ["🥦", "🌶️", "🍄", "🥬", "🌽", "🥕", "🥢"]
    }
  ];

  const showSingle = selectedCardTitle !== null;
  const wrapperClass = showSingle ? "card-wrapper single-centered" : "card-wrapper";

  return (
    <div className="relative">
      <h3 className="logo2">Noodles Menu</h3>
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

export default Noodles;
