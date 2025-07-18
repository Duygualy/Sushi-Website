import { useState } from "react";
import MenuCard from "../components/MenuCards";
import IngredientEmojis from "../components/IngredientEmojis";
import "../style/MenuCard.css";

function Desserts() {
  const [selectedCardTitle, setSelectedCardTitle] = useState(null);
  const [selectedEmojis, setSelectedEmojis] = useState([]);

  const items = [
    {
      title: "Mochi",
      image: "Dessert.png",
      emojis: ["💧", "🍫", "🍓", "🥭", "🥥", "🍵", "🍦", "🍯"],
      price: "2.99",
      ingredients: ["Rice flour", "Sugar", "Water", "Red bean paste", "Fruit flavors"],
    },
    {
      title: "Dango",
      image: "Dango.png",
      emojis: ["🥤", "🍡", "🍋", "🍊", "🍎", "🍈", "🍇", "🍒"],
      price: "3.99",
      ingredients: ["Rice flour", "Sugar", "Water", "Fruit syrup"],
    },
    {
      title: "Dorayaki",
      image: "Dorayaki.png",
      emojis: ["🍹", "🥞", "🍌", "🍍", "🍪", "🍰", "🍫", "🍯"],
      price: "8.99",
      ingredients: ["Flour", "Eggs", "Sugar", "Honey", "Red bean paste"],
    },
  ];

  const showSingle = selectedCardTitle !== null;
  const wrapperClass = showSingle ? "card-wrapper single-centered" : "card-wrapper";

  return (
    <div className="relative">
      <h3 className="logo2">Dessert Menu</h3>
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

export default Desserts;

