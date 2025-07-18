import { useEffect } from "react";

const MouseTrailEmoji = ({ emoji = "🍣" }) => {
  useEffect(() => {
    const handleMove = (e) => {
      const el = document.createElement("div");
      el.textContent = emoji;
      el.style.position = "fixed";
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
      el.style.fontSize = "1.5rem";
      el.style.pointerEvents = "none";
      el.style.zIndex = "9999";
      el.style.animation = "fadeOut 2s ease-out forwards";

      document.body.appendChild(el);
      setTimeout(() => el.remove(), 1000);
    };

    const style = document.createElement("style");
    style.textContent = `
      @keyframes fadeOut {
        0% { opacity: 1; transform: scale(1); }
        100% { opacity: 0; transform: scale(2); }
      }
    `;
    document.head.appendChild(style);

    document.addEventListener("mousemove", handleMove);
    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.head.removeChild(style);
    };
  }, [emoji]);

  return null;
};

export default MouseTrailEmoji;
