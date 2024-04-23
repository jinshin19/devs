import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <small>
        {" "}
        Alrights Reserved Devs 2023 | created by{" "}
        <Link to="https://github.com/jinshin19" target="_blank">
          {" "}
          jinshin19{" "}
        </Link>{" "}
      </small>
    </footer>
  );
};

export default Footer;
