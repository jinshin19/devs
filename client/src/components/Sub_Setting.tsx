import { useAtom } from "jotai";
import { settingAtom } from "../atoms/use_toggler";
import { Link, useNavigate } from "react-router-dom";
const Sub_Settings = () => {
  const [show] = useAtom(settingAtom);
  const id = localStorage.getItem("devs_ID");
  const navigate = useNavigate();

  const logoutHandler = async () => {
    localStorage.removeItem("devs_accessToken");
    localStorage.removeItem("devs_ID");
    navigate("/login");
  };

  return (
    show && (
      <div className="sub-setting-wrapper">
        <div className="arrow"></div>
        <div className="actions-wrapper">
          <Link to={`/update/${id}`} className="actions">
            {" "}
            Profile{" "}
          </Link>
          <button type="button" onClick={logoutHandler} className="actions">
            {" "}
            logout{" "}
          </button>
        </div>
      </div>
    )
  );
};

export default Sub_Settings;
