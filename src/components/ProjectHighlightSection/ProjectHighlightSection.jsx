import "./ProjectHighlightSection.css";

const ProjectHighlightSection = () => {
  return (
    <section className="project-highlights-section">
      <div className="left">
        <img
          src="https://cdn.pixabay.com/photo/2020/02/01/22/10/house-4811590_640.jpg"
          alt="project higlights"
        />
      </div>
      <div className="right">
        <h1>Project Highlights</h1>
        <h1>Near to School</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />{" "}
          Fugiat ipsum nulla quos omnis voluptates quibusdam.
        </p>
        <p>Next</p>
      </div>
    </section>
  );
};

export default ProjectHighlightSection;
