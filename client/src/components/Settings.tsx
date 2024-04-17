import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { settingAtom } from "../atoms/use_toggler";
import { useAtom } from "jotai";
import { useEffect } from "react";

const Settings = () => {
  const [show, setShow] = useAtom(settingAtom);

  useEffect(() => {
    setShow(false);
  }, [setShow]);

  return (
    <button type="button" onClick={() => setShow(!show)}>
      <FontAwesomeIcon icon={faGear} />
    </button>
  );
};

export default Settings;
