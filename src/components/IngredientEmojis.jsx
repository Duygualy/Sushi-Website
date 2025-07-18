import { motion } from "framer-motion";

export default function IngredientEmojis({ emojis = [], cardWidth = 300, cardHeight = 400 }) {
    const displayedEmojis = emojis.slice(0, 8);

    const centerX = cardWidth / 2;
    const centerY = cardHeight / 2;

    const positions = [
        { x: 300, y: 30 },
        { x: 300, y: 180},
        { x: 300, y: 340 },
        { x: 300, y: 500 },
        { x: 850, y: 30 },
        { x: 850, y: 180 },
        { x: 850, y: 340},
        { x: 850, y: 500},
    ];

    return (
        <div style={{ position: "absolute", top: 0, left: 0, width: cardWidth, height: cardHeight }}>
            {displayedEmojis.map((emoji, index) => {
                const { x, y } = positions[index];
                const rotate = Math.random() * 360;

                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 0, y: 0, rotate: 0 }}
                        animate={{ opacity: 1, x, y, rotate }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        style={{
                            position: "absolute",
                            top: `${centerY}px`,
                            left: `${centerX}px`,
                            transform: "translate(-50%, -50%)",
                            fontSize: "64px",
                            zIndex: 2,
                            pointerEvents: "none",
                            userSelect: "none",
                            textShadow: "0 0 32px #ff0000, 0 0 64px #ff0000"
                        }}
                    >
                        {emoji}
                    </motion.div>
                );
            })}
        </div>
    );
}
