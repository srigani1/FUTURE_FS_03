import "../styles/Menu.css";
import menuData from "../data/menuData";

function Menu() {
  return (
    <section id="menu" className="menu">

      <div className="container">

        <h2 className="section-title">
          Our Menu
        </h2>

        <div className="menu-grid">

          {menuData.map((item) => (
            <div className="menu-card" key={item.id}>

              <img src={item.image} alt={item.name} />

              <h3>{item.name}</h3>

              <p>{item.price}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Menu;