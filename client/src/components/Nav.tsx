import { Link } from "react-router-dom";
import Search from "./Search";
import Settings from "./Settings";
import Sub_Settings from "./Sub_Setting";

const Nav = () => {
  return (
    <nav>
      <Link to="/" className="logo">
        {" "}
        Devs{" "}
      </Link>
      <Search />
      <ul>
        <li>
          <Settings />
          <Sub_Settings />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;