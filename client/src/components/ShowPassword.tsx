import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Dispatch, SetStateAction } from "react";

interface PropType {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

const ShowPassword = ({ show, setShow }: PropType) => {
  return (
    <div className="show-password">
      <button type="button" onClick={() => setShow(!show)!}>
        {show ? (
          <FontAwesomeIcon icon={faEye} />
        ) : (
          <FontAwesomeIcon icon={faEyeSlash} />
        )}
      </button>
    </div>
  );
};

export default ShowPassword;
