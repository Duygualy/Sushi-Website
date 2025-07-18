import "../style/Menu.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Menu() {
  const [showOnlySushi, setShowOnlySushi] = useState(false);
  const [sushiIndex, setSushiIndex] = useState(0);
  const navigate = useNavigate();

  const sushiItems = [
    { name: "Maki", src: "maki.png" },
    { name: "Classic", src: "classic.png" },
    { name: "Nigiri", src: "Sushi.png" },
    { name: "Sashimi", src: "Sashimi.png" },
    { name: "Sets", src: "sets.png" }
  ];

  const nextSushi = () => {
    setSushiIndex((prev) => (prev + 1) % sushiItems.length);
  };

  const prevSushi = () => {
    setSushiIndex((prev) => (prev - 1 + sushiItems.length) % sushiItems.length);
  };

  return (
    <div>
      <div className="floating-sushi" style={{ top: "10%", left: "5%", fontSize: "3rem" }}>🍣</div>
      <div className="floating-sushi" style={{ top: "60%", right: "10%", fontSize: "2.5rem" }}>🍸</div>
      <div className="floating-sushi" style={{ bottom: "20%", left: "15%", fontSize: "3.5rem" }}>🍱</div>
      <div className="particles"></div>

      <h3 className="logo2">Menu</h3>

      <div className="menu-grid">
        {!showOnlySushi && (
          <>
            <div className="menu-item">
              <img src="Appetizers.png" alt="Appetizers" onClick={() => navigate('/Appetizers')}/>
              <p>Appetizers</p>
            </div>

            <div className="menu-item" onClick={() => setShowOnlySushi(true)}>
              <img src="Sushi.png" alt="Sushi" />
              <p>Sushi</p>
            </div>

            <div className="menu-item">
              <img src="Noodles.png" alt="Noodle" onClick={() => navigate('/Noodles')} />
              <p>Noodles</p>
            </div>

            <div className="menu-item">
              <img src="Dessert.png" alt="Desserts"  onClick={() => navigate('/Desserts')} />
              <p>Desserts</p>
            </div>

            <div className="menu-item">
              <img src="Soups.png" alt="Soups" onClick={() => navigate('/Soups')} />
              <p>Soups</p>
            </div>

            <div className="menu-item">
              <img src="Behaviors.png" alt="Behaviors" style={{ width: "100px", height: "150px", borderRadius: "0%" }} onClick={() => navigate('/Behaviors')}  />
              <p>Drinks</p>
            </div>
          </>
        )}

        {showOnlySushi && (
          <div className="popup-image" onClick={() => setShowOnlySushi(false)}>
            <button className="nav-btn left" onClick={(e) => { e.stopPropagation(); prevSushi(); }}>&lt;</button>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
              <img
                key={sushiIndex}
                src={sushiItems[sushiIndex].src} 
                alt={sushiItems[sushiIndex].name} 
                className="sushi-img animated"
                  onClick={() => navigate(`/${sushiItems[sushiIndex].name.toLowerCase().replaceAll(" ", "-")}`)}
                />
              <p className="sushi-name">{sushiItems[sushiIndex].name}</p>
            </div>
            <button className="nav-btn right" onClick={(e) => { e.stopPropagation(); nextSushi(); }}>&gt;</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Menu;
