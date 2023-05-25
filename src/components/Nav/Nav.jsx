import "./Nav.css";
const Nav = () => {
  return (
    <nav>
      <div className="logo-container">
        Discover <br />
        Plots
      </div>

      <ul className="menu-list">
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Agents</a>
        </li>
        <li>
          <a href="#">Aminities</a>
        </li>
        <li>
          <div className="divider"></div>
        </li>
        <li>
          <a href="#">Sign In</a>
        </li>
        <li>
          <a href="#" className="btn ">
            Schedule a Call
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
