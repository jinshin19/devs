import { useAtom } from "jotai";
import { settingAtom } from "../atoms/use_toggler";
import { useNavigate } from "react-router-dom";
const Sub_Settings = () => {
  const [show] = useAtom(settingAtom);

  const navigate = useNavigate();

  const logoutHandler = async () => {
    navigate("/login");
  };

  return (
    show && (
      <div className="sub-setting-wrapper">
        <div className="arrow"></div>
        <div className="actions-wrapper">
          <a href="/" className="actions">
            {" "}
            Profile{" "}
          </a>
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
