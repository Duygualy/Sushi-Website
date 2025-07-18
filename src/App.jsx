import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect} from "react";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Navbar from "./components/Navbar";
import Maki from "./pages/Maki";
import Nigiri from "./pages/Nigiri";
import Sashimi from "./pages/Sashimi";
import Sets from "./pages/Sets";
import Classic from "./pages/Classic";
import Appetizers from "./pages/Appetizers";
import Desserts from "./pages/Desserts";
import Behaviors from "./pages/Behaviors";
import Noodles from "./pages/Noodles";
import Soups from "./pages/Soups";
import MouseTrail from "./components/MouseTrail"; 
import FloatingEmojis from "./components/FloatingEmojis";

function App() {

    useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

    const interval = setInterval(createParticle, 300);
    return () => clearInterval(interval);

    function createParticle() {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = Math.random() * 100 + "vw";
      particle.style.animationDelay = Math.random() * 8 + "s";
      particle.style.animationDuration = Math.random() * 4 + 4 + "s";
      const colors = [
        "rgba(255, 107, 107, 0.5)",
        "rgba(255, 217, 61, 0.5)",
        "rgba(107, 207, 127, 0.5)",
        "rgba(76, 201, 196, 0.5)",
      ];
      particle.style.background = colors[Math.floor(Math.random() * colors.length)];
      document.querySelector(".particles").appendChild(particle);
      setTimeout(() => particle.remove(), 8000);
    }
  }, []);

  return (
    <Router>
      <Navbar />
      <MouseTrail />
      <FloatingEmojis />
      <div className="particles"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/appetizers" element={<Appetizers />} />
        <Route path="/maki" element={<Maki />} />
        <Route path="/nigiri" element={<Nigiri />} />
        <Route path="/sashimi" element={<Sashimi />} />
        <Route path="/sets" element={<Sets />} />
        <Route path="/classic" element={<Classic />} />
        <Route path="/noodles" element={<Noodles />} />
        <Route path="/desserts" element={<Desserts />} />
        <Route path="/soups" element={<Soups />} />
        <Route path="/behaviors" element={<Behaviors />} />
      </Routes>
    </Router>
  );
}

export default App;
