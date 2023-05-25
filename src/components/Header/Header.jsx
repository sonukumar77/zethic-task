import Nav from "../Nav/Nav";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header-wrapper">
        <Nav />
        <div className="intro-section">
          <div className="intro-left">
            <img
              src="https://cdn.pixabay.com/photo/2020/02/18/11/02/map-4859139_640.png"
              alt="intro-poster"
            />
          </div>
          <div className="intro-right">
            <h1>
              Discover Your Perfect <br /> Plot of Land.
            </h1>
            <p>Starting at</p>
            <p>
              <span>&#8377; 3999</span> per sqft.
            </p>

            <div className="search-container">
              <input type="text" placeholder="Search area or location" />
              <select>
                <option> &#8377; Budget</option>
                <option> 1000 </option>
                <option> 1500</option>
              </select>
              <a className="btn">Search</a>
            </div>
          </div>
        </div>
        <div className="trending-project-section">
          <div className="left">
            <div className="landmark">
              <div className="record-card">
                <span>340k+</span>
                <span>Landmark near chennai</span>
              </div>
            </div>

            <div>
              <div className="record-card">
                <span>437k+</span>
                <span>Happy Customers</span>
              </div>
              <div className="record-card">
                <span>4.3m+</span>
                <span>Sq. feet Developed</span>
              </div>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur
              adipisicing elit. Ipsum, non. adipisicing elit. Ipsum, non.
            </p>
          </div>
          <div className="right">
            <p>
              {" "}
              <span> ♥ </span> Trending Projects
            </p>
            <div className="trending-projects">
              <div className="trending-project">
                <img
                  src="https://cdn.pixabay.com/photo/2018/03/18/15/26/villa-3237114_640.jpg"
                  alt="project poster1"
                />
              </div>
              <div className="trending-project">
                <img
                  src="https://cdn.pixabay.com/photo/2014/11/21/17/17/house-540796_640.jpg"
                  alt="project poster2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
