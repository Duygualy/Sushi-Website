import { useState } from "react";
import MenuCard from "../components/MenuCards";
import IngredientEmojis from "../components/IngredientEmojis";
import "../style/MenuCard.css";

function Sashimi() {
  const [selectedCardTitle, setSelectedCardTitle] = useState(null);
  const [selectedEmojis, setSelectedEmojis] = useState([]);

  const items = [
    {
      title: "Ebi Sashimi",
      image: "EbiS.png",
      price: "7.99",
      emojis: [" ","🦐", "🍚","", "","🍽️", "🥢"," "],
      ingredients: ["Shrimp"],
    },
    {
      title: "Tako Sashimi",
      image: "TakoS.png",
      price: "9.99",
      emojis: ["","🐙", "🍚","","", "🍽️", "🥢",""],
      ingredients: ["Octopus"],
    },
    {
      title: "Maguro Sashimi",
      image: "MaguroS.png",
      price: "8.50",
      emojis: ["","🐟", "🍚","", "","🍽️", "🥢",""],
      ingredients: ["Tuna"],
    },
    {
      title: "Sake Sashimi",
      image: "SakeS.png",
      price: "8.99",
      emojis: ["","🐠", "🍚","","", "🍽️", "🥢",""],
      ingredients: ["Salmon"],
    },
  ];

  const showSingle = selectedCardTitle !== null;
  const wrapperClass = showSingle ? "card-wrapper single-centered" : "card-wrapper";

  return (
    <div className="relative">
      <h3 className="logo2">Sashimi Menu</h3>
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

export default Sashimi;
