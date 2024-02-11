import { useAtom } from 'jotai'
import { settingAtom } from '../atoms/use_toggler'
const Sub_Settings = () => {

    const [ show ] = useAtom(settingAtom)

    return (
        
        show && <div className="sub-setting-wrapper">
                    <div className="arrow"></div>
                    <div className="actions-wrapper">
                        <a href="/" className="actions"> Profile </a>
                        <button type="button" className="actions"> logout </button>
                    </div>
                </div>

    )
}

export default Sub_Settings