import "../styles/Testimonials.css";
import testimonials from "../data/testimonialsData";

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">

      <div className="container">

        <h2 className="section-title">
          Customer Reviews
        </h2>

        <div className="review-grid">

          {testimonials.map((item) => (
            <div className="review-card" key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.review}</p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;