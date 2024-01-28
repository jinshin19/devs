import { Link } from "react-router-dom";
import Search from "./Search";
import Settings from "./Settings";

const Nav = () => {

    return (
        <nav>
            <Link to="/" className="logo"> Devs </Link>
            <Search/>
            <ul>
                <li> <Settings/> </li>
            </ul>
        </nav>
    )

}

export default Nav;