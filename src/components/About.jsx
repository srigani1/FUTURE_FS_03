import "../styles/About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="container about-container">

        <div className="about-image">
          <img src="/images/interior.png" alt="Restaurant Interior" />
        </div>

        <div className="about-content">
          <h2>About Spice Garden</h2>

          <p>
            Welcome to Spice Garden Restaurant, where authentic flavors
            meet modern dining. We are passionate about serving delicious
            meals prepared with fresh ingredients and traditional recipes.
          </p>

          <p>
            Whether you're enjoying a family dinner, celebrating a special
            occasion, or simply craving your favorite dish, we strive to
            provide a memorable dining experience.
          </p>

          <button>Reserve a Table</button>
        </div>

      </div>
    </section>
  );
}

export default About;