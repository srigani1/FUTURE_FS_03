import "../styles/Gallery.css";

function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="container">

        <h2 className="section-title">
          Gallery
        </h2>

        <div className="gallery-grid">
          <img src="/FUTURE_FS_03/images/interior.png" alt="Restaurant" />
          <img src="/FUTURE_FS_03/images/table.png" alt="Dining Area" />
          <img src="/FUTURE_FS_03/images/biryani.png" alt="Food" />
          <img src="/FUTURE_FS_03/images/interior.png" alt="Interior" />
        </div>

      </div>
    </section>
  );
}

export default Gallery;