import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { UserValueTypes } from "../../types/types";
import ShowPassowrd from "../../components/ShowPassword";

const Signup = () => {

    const [ values, setValues ] = useState<UserValueTypes>(
        {
            username: "",
            firstname: "",
            lastname: "",
            password: "",
            confirm_password: ""
        }
    );

    const controlledInputs = ( e: React.ChangeEvent<HTMLInputElement> ) => {

        const name: string = e.target.name;
        const value: string  = e.target.value;

        setValues( ( p ) => ( { ...p, [ name ]: value } ) )

    }

    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmPasswordRef = useRef<HTMLInputElement>(null);

    return (
        <div className="wrapper signup">

            <div className="form-wrapper">
                <form>
                    <div className="title-wrapper">
                        <p> Signup </p>
                    </div>
                    <div className="label-wrapper">
                        <label htmlFor="Username">
                            <p> Username </p>
                            <input id="Username" type="text" name="username" onChange={ controlledInputs } placeholder="Username..." value={ values?.username} />
                        </label>
                    </div>
                    <div className="label-wrapper">
                        <label htmlFor="Firstname">
                            <p> Firstname </p>
                            <input id="Firstname" type="text" name="firstname" onChange={ controlledInputs } placeholder="Firstname..." value={ values?.firstname} />
                        </label>
                    </div>
                    <div className="label-wrapper">
                        <label htmlFor="Lastname">
                            <p> Lastname </p>
                            <input id="Lastname" type="text" name="lastname" onChange={ controlledInputs } placeholder="Lastname..." value={ values?.lastname} />
                        </label>
                    </div>
                    <div className="label-wrapper">
                        <label htmlFor="Password">
                            <p> Password </p>
                            <div className="password-wrapper">
                                <input id="Password" type="password" name="password" onChange={ controlledInputs } placeholder="Password ..." value={ values?.password} ref={ passwordRef } />
                                <ShowPassowrd password={ passwordRef } confirm_password={ confirmPasswordRef } />
                            </div>
                        </label>
                    </div>
                    <div className="label-wrapper">
                        <label htmlFor="ConfirmPassword">
                            <p> Confirm Password </p>
                            <input id="ConfirmPassword" type="password" name="confirm_password" onChange={ controlledInputs } placeholder="Confirm Password ..." value={ values?.confirm_password} ref={ confirmPasswordRef } />
                        </label>
                    </div>
                    <div className="buttons-wrapper">
                        <button type="button"> Signup </button>
                    </div>
                    <div className="extra-wrapper">
                        <p> Already have an account? <Link to={'/login'}> login </Link> </p>
                    </div>
                </form>
            </div>

        </div>
    )

}

export default Signup;