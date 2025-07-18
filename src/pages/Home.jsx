import { useEffect, useRef, useState } from "react";
import "../style/Home.css";
import Navbar from "../components/Navbar";

function Home() {

  const images = ["2.png", "3.png", "4.png", "5.png"];

  function Carousel() {
    const [current, setCurrent] = useState(0);
    const imgRef = useRef(null);

    const goTo = (idx) => setCurrent(idx);
    const prev = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    const next = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

    useEffect(() => {
      if (imgRef.current) {
        imgRef.current.classList.remove("fade-img");
        void imgRef.current.offsetWidth;
        imgRef.current.classList.add("fade-img");
      }
    }, [current]);

    return (
      <div className="carousel-container">
        <div className="carousel-controls">
          <button onClick={prev} className="carousel-btn" aria-label="Previous">&#60;</button>
          <img
            ref={imgRef}
            src={images[current]}
            alt={`About Us ${current + 1}`}
            className="carousel-image"
          />
          <button onClick={next} className="carousel-btn" aria-label="Next">&#62;</button>
        </div>
        <div className="carousel-dots">
          {images.map((_, idx) => (
            <span
              key={idx}
              onClick={() => goTo(idx)}
              className={`carousel-dot ${idx === current ? "active" : ""}`}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Sushinn</h1>
          <p>Where Sushi Meets With You In Perfect Harmony</p>
          <a href="#menu" className="cta-button">Experience the Magic</a>
        </div>
      </section>

      <section id="menu">
        <h2 className="logo2">About Us</h2>
        <Carousel />
      </section>

      <footer>
        <div className="footer-content">
          <div className="footer-about">
            <div className="logo">Sushinn</div><br />
            <p>A fusion of traditional Japanese flavors with modern touches, offering an unforgettable taste experience.</p><br />
            <div className="logo">Working Hours:</div><br />
            <p>Monday - Sunday</p>
            <p>11:30 AM - 11:00 PM</p><br />
            <div className="logo">Contact Us:</div><br />
            <p>E-mail: <a href="mailto:info@sushinn.com.tr">info@sushinn.com.tr</a></p>
            <p>Telephone: 0212 582 0 211</p>
          </div>
          <div className="footer-social">
            <h3 className="logo">Follow Us</h3><br />
            <a href="https://www.instagram.com/sushinn.tr/" target="_blank" rel="noreferrer">
              <img src="/Instagram.png" alt="Instagram" className="social-icon" />
            </a>
            <a href="https://www.facebook.com/sushiinnn/" target="_blank" rel="noreferrer">
              <img src="/Facebook.png" alt="Facebook" className="social-icon" />
            </a>
            <a href="https://x.com/InnSushi" target="_blank" rel="noreferrer">
              <img src="/Twitter.jpg" alt="Twitter" className="twitter-icon" />
            </a>
            <h3 className="logo">Location:</h3><br />
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.226099950399!2d28.6347307!3d41.0032098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b55f8d3deadc77%3A0x99e29e7f987c59d6!2sSushi%20%C4%B0nn%20Beylikd%C3%BCz%C3%BC!5e0!3m2!1str!2str!4v1718030000000!5m2!1str!2str"
              width="300"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sushinn Location"
            ></iframe>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2025 Sushinn <br />All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
