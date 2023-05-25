import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <div className="logo-container">
          <h1>
            Discover <br /> Plots
          </h1>
          <p>Lorem Ipsum Dummy Text</p>
        </div>
        <div className="links-container">
          <ul>
            <li>
              <h4>Company</h4>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <ul>
            <li>
              <h4>Follow us</h4>
            </li>
            <li>
              <a href="#">Customers</a>
            </li>
            <li>
              <a href="#">Brokers</a>
            </li>
            <li>
              <a href="#">Lenders</a>
            </li>
          </ul>
          <ul>
            <li>
              <h4>Follow us</h4>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagrams</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyrights-container">
        <div className="copyright">
          <p>Copyright @ 2023 city Plots</p>
        </div>
        <div className="social-links">
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Privacy Collection Notice</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
