import "./index.css";
import Favourite from "../Favourite";

const Header = () => (
  <Nav>
    <input type="search" className="input-container" />
    <Link to="/Favourite">
      <Favourite />
    </Link>
  </Nav>
);

export default Header;
