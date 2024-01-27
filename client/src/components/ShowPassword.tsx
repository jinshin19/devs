import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

interface PropType {
    password: any;
    confirm_password?: any;
}

const ShowPassowrd = ( { password, confirm_password }: PropType) => {

    const [ show, setShow ] = useState(false)

    const buttonHandler = ()  => {

        setShow( !show )

        if ( !show ) {

            password.current.type = "text"
            if ( confirm_password !== undefined ) {
                confirm_password.current.type = "text"
            } else {
                null
            }

        }
        else {

            password.current.type = "password"
            if ( confirm_password !== undefined ) {
                confirm_password.current.type = "password"
            } else {
                null
            }

        }
    }

    return (
        <div className="show-password">
            <button type='button' onClick={ buttonHandler }>
                {
                    show ? 
                    <FontAwesomeIcon icon={faEye} /> :
                    <FontAwesomeIcon icon={faEyeSlash} />
                }
            </button>
        </div>
    )

}

export default ShowPassowrd;