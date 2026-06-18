import "../styles/Specials.css";

function Specials() {
  return (
    <section id="specials" className="specials">
      <div className="container">

        <h2 className="section-title">
          Chef's Specials
        </h2>

        <div className="specials-content">

          <div className="special-card">
            <h3>Hyderabadi Dum Biryani</h3>
            <p>
              Our signature dish prepared with aromatic spices and
              premium basmati rice.
            </p>
          </div>

          <div className="special-card">
            <h3>Butter Chicken</h3>
            <p>
              Rich creamy gravy with tender chicken cooked to perfection.
            </p>
          </div>

          <div className="special-card">
            <h3>Paneer Tikka</h3>
            <p>
              Marinated paneer grilled with traditional Indian spices.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Specials;