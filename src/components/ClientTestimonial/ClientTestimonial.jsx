import "./ClientTestimonial.css";

const ClientTestimonial = () => {
  return (
    <section className="client-testimonial-section">
      <div className="video-container">
        <div className="video-card">
          <img
            src="https://cdn.pixabay.com/photo/2020/02/01/22/10/house-4811590_640.jpg"
            alt="project higlights"
          />
        </div>
        <div className="video-card">
          <img
            src="https://cdn.pixabay.com/photo/2020/02/01/22/10/house-4811590_640.jpg"
            alt="project higlights"
          />
        </div>
        <div className="video-card current-video-card">
          <img
            src="https://cdn.pixabay.com/photo/2020/02/01/22/10/house-4811590_640.jpg"
            alt="project higlights"
          />
        </div>
      </div>
      <div className="video-btn-control-conntainer">
        <ul>
          <li>
            <a href="#" className="btn  light-btn">
              ◀
            </a>
          </li>
          <li>
            <a href="#" className="btn  light-btn">
              ▶
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ClientTestimonial;
