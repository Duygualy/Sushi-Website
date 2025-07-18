import "../style/FloadingEmojis.css";

const FloatingEmojis = () => {
  return (
    <>
      <div className="floating-sushi" style={{ top: "10%", left: "5%", fontSize: "3rem" }}>🍣</div>
      <div className="floating-sushi" style={{ top: "60%", right: "10%", fontSize: "2.5rem" }}>🍸</div>
      <div className="floating-sushi" style={{ bottom: "20%", left: "15%", fontSize: "3.5rem" }}>🍱</div>

      <div className="animated-icons">
        <div className="icon">🍣</div>
        <div className="icon">🍸</div>
        <div className="icon">🥢</div>
        <div className="icon">🍶</div>
      </div>
    </>
  );
};

export default FloatingEmojis;
