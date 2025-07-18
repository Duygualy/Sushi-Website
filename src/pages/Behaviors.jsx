import { useState } from "react";
import MenuCard from "../components/MenuCards";
import IngredientEmojis from "../components/IngredientEmojis";
import "../style/MenuCard.css";

function Behaviors() {
  const [selectedCardTitle, setSelectedCardTitle] = useState(null);
  const [selectedEmojis, setSelectedEmojis] = useState([]);

  const items = [
    {
      
      title: "Water",
      image: "Waterr.png",
      emojis: ["💧"],
      price: "2.99",
      ingredients: ["Just Water Girl"]
    },
    {
      title: "Coca Cola",
      image: "Colaa.png",
      emojis: ["🥤"],
      price: "3.99",
      ingredients: ["Coca Cola Girl look at their website for ingredients"]
    },
    {
      title: "Aperol Spritz",
      image: "Aperoll.png",
      emojis: ["","🍹","🧊","","","🍊","🍾",""],
      price: "8.99",
      ingredients: ["Aperol", "Prosecco", "Soda"]
    },
    {
      title: "Pina Colada",
      image: "Pinaa.png",
      emojis: ["","🍍","🥂","","","🍹","🧉",""],
      price: "8.99",
      ingredients: ["Rum", "Coconut Cream", "Pineapple Juice"]
    },
    {
      title: "Mojito",
      image: "Mojitoo.png",
      emojis: ["","🌿","🍸","","","🍋‍🟩","🧊",""],
      price: "7.99",
      ingredients: ["Rum", "Mint", "Lime", "Sugar", "Soda"]
    },
    {
      title: "Cosmopolitan",
      image: "Cosmopolitan.png",
      emojis: ["","🍒","🧊","","","🍋‍🟩","🍸",""],
      price: "9.99",
      ingredients: ["Vodka", "Triple Sec", "Cranberry Juice", "Lime Juice"]
    },
  ];

  const showSingle = selectedCardTitle !== null;
  const wrapperClass = showSingle ? "card-wrapper single-centered" : "card-wrapper";

  return (
    <div className="relative">
      <h3 className="logo2">Drinks Menu</h3>
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

export default Behaviors;
