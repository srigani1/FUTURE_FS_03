import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="overlay">
        <h1>Authentic Taste, Memorable Moments</h1>

        <p>
          Experience the finest dining with traditional recipes,
          fresh ingredients and exceptional hospitality.
        </p>

        <a href="#menu" className="hero-btn">
          View Menu
        </a>
      </div>
    </section>
  );
}

export default Hero;