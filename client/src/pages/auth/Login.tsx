import React, {  useRef, useState } from "react";
import { Link } from "react-router-dom";
import { UserValueTypes } from "../../types/types";
import ShowPassowrd from "../../components/ShowPassword";

const Login = () => {

    const [ values, setValues ] = useState<UserValueTypes>(
        {
            username: "",
            password: "",
        }
    );

    const controlledInputs = ( e: React.ChangeEvent<HTMLInputElement> ) => {

        const name: string = e.target.name;
        const value: string  = e.target.value;

        setValues( ( p ) => ( { ...p, [ name ]: value } ) )

    }

    const passwordRef = useRef<HTMLInputElement>(null)

    return (
        <div className="wrapper login">

            <div className="about-wrapper">
                <div className="title-wrapper"> <p> Devs</p> </div>
                <div className="content-wrapper">
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, facere cupiditate obcaecati cumque, voluptates repudiandae, repellendus assumenda laborum eaque quibusdam architecto ratione dicta ipsum reiciendis a harum pariatur illum adipisci? </p>
                </div>
            </div>

            <div className="form-wrapper">
                <form>
                    <div className="title-wrapper">
                        <p> Login </p>
                    </div>
                    <div className="label-wrapper">
                        <label htmlFor="Username">
                            <p> Username </p>
                            <input id="Username" type="text" name="username" onChange={ controlledInputs } placeholder="Username..." value={ values?.username} />
                        </label>
                    </div>
                    <div className="label-wrapper">
                        <label htmlFor="Password">
                            <p> Password </p>
                            <div className="password-wrapper">
                                <input id="Password" type="password" name="password" onChange={ controlledInputs } placeholder="Password ..." value={ values?.password} ref={ passwordRef } />
                                <ShowPassowrd password={ passwordRef } />
                            </div>
                        </label>
                    </div>
                    <div className="buttons-wrapper">
                        <button type="button"> Login </button>
                    </div>
                    <div className="extra-wrapper">
                        <p> Dont have an account yet? <Link to={'/signup'}> Signup </Link> </p>
                    </div>
                </form>
            </div>

        </div>
    )

}

export default Login;