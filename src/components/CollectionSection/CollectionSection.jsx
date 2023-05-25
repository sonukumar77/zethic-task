import "./CollectionSection.css";

const CollectionSection = () => {
  return (
    <section className="collection-section">
      <div className="collection-container">
        <div className="card">
          <h1>Explore our Collection</h1>
          <div className="collection-divider"></div>
          <p>
            {" "}
            <span> ✨ </span>Corner Plots
          </p>
          <div className="collection-divider"></div>
        </div>
        <div className="card">
          <img
            src="https://cdn.pixabay.com/photo/2016/01/31/14/32/architecture-1171462_640.jpg"
            alt="company-poster1"
          />
        </div>
        <div className="card">
          <img
            src="https://cdn.pixabay.com/photo/2016/01/31/14/32/architecture-1171462_640.jpg"
            alt="company-poster2"
          />
        </div>
        <div className="card">
          <img
            src="https://cdn.pixabay.com/photo/2016/01/31/14/32/architecture-1171462_640.jpg"
            alt="company-poster3"
          />
        </div>
      </div>
      <p> ➡ Explore More</p>
    </section>
  );
};

export default CollectionSection;
