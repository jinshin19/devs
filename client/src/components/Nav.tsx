import { Link, useNavigate } from "react-router-dom";
import Search from "./Search";
import Settings from "./Settings";
import Sub_Settings from "./Sub_Setting";
import { useEffect } from "react";
import { axiosInstance } from "../services/api";

const Nav = () => {
  const navigate = useNavigate();
  // Temporary
  useEffect(() => {
    const fetchData = async () => {
      const id = localStorage.getItem("temporaryStorage_ID");
      try {
        const request = await axiosInstance.get(`/devs/authenticated/${id}`);
      } catch (error) {
        navigate("/login");
      }
    };
    fetchData();
  });

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
