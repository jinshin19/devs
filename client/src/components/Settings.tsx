import { faGear } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { settingAtom } from "../atoms/use_toggler"
import { useAtom } from 'jotai'

const Settings = () => {

    const [ show, setShow ] = useAtom(settingAtom);

    return (
        <button type="button" onClick={() => setShow(!show)}>
            <FontAwesomeIcon icon={ faGear }/>
        </button>
    )
  
}

export default Settings