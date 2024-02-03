import React, { useRef, useState } from "react";
import { UserValueTypes } from "../types/types";
import ShowPassowrd from "./ShowPassword";
import imagePlaceHolder from '../assets/image-placeholder.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

interface LinksType {
    title: string;
    link: string;
}

const UpdateComponent = () => {

    const [ values, setValues ] = useState<UserValueTypes>(
        {
            username: "",
            firstname: "",
            middlename: "",
            lastname: "",
            password: "",
            confirm_password: ""
        }
    );

    const [ links, setLinks ] = useState<LinksType[]>(
        [
            {
                title: "",
                link: ""
            }
        ]
    );

    const controlledInputs = ( e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {

        const name: string = e.target.name;
        const value: string  = e.target.value;

        setValues( ( p ) => ( { ...p, [ name ]: value } ) )

    }

    const controlledLinkInputs = ( e: React.ChangeEvent<HTMLInputElement>, index: number ) => {

        const name: string = e.target.name;
        const value: string  = e.target.value;
        
        setLinks( (p) => {

            const updateLinks = [...p];
            updateLinks[index] = {
                ...updateLinks[index],
                [name]: value
            };
            return updateLinks;
            
        })
    }

    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmPasswordRef = useRef<HTMLInputElement>(null);

    const deleteLinkHandler = ( index: number ) => ( links?.length > 1 ) && setLinks( ( p ) => p.filter( (_, i) => i !== index) )

    const addLinkHandler = () => {
        setLinks( (p) => [ ...p, { title: '', link: '' } ] )
    }

    return (
        <div className="update-container">
            <div className="form-wrapper">
                <form>
                    <div className="title-wrapper">
                        <p> Update </p>
                    </div>
                    <div className="image-wrapper">
                        <div className="image-container">
                            <img src={ imagePlaceHolder } alt="" />
                        </div>
                        <label htmlFor="File">
                            <p> File: downloads/ </p>
                            <p> Upload File </p>
                            <input id="File" type="file" name="file" onChange={ controlledInputs } placeholder="File..." hidden />
                        </label>
                    </div>
                    <div className="label-wrapper stack-wrapper">
                        <label htmlFor="Bio">
                            <p> Bio </p>
                            <textarea id="Bio" name="confirm_password" onChange={ controlledInputs } placeholder="Bio..." value={ values?.confirm_password} ></textarea>
                        </label>
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
                        <label htmlFor="Firstname">
                            <p> Middlename </p>
                            <input id="Middlename" type="text" name="middlename" onChange={ controlledInputs } placeholder="Middlename..." value={ values?.middlename} />
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
                                <input id="Password" type="password" name="password" onChange={ controlledInputs } placeholder="Password..." value={ values?.password} ref={ passwordRef } />
                                <ShowPassowrd password={ passwordRef } confirm_password={ confirmPasswordRef } />
                            </div>
                        </label>
                    </div>
                    <div className="label-wrapper">
                        <label htmlFor="ConfirmPassword">
                            <p> Confirm Password </p>
                            <input id="ConfirmPassword" type="password" name="confirm_password" onChange={ controlledInputs } placeholder="Confirm Password..." value={ values?.confirm_password} ref={ confirmPasswordRef } />
                        </label>
                    </div>
                    <h2> Stacks </h2>
                    <div className="label-wrapper stack-wrapper">
                        <label htmlFor="Stacks">
                            <p> Stacks </p>
                            <textarea id="Stacks" name="stacks" onChange={ controlledInputs } placeholder="Enter stack and add comma ( e.g: html, css, js )" value={ values?.confirm_password} ></textarea>
                        </label>
                    </div>
                    <h2> Social Links </h2>
                    <div className="label-wrapper links-wrapper">
                        <div className="input-wrapper">
                            {
                                links && links?.map( ( l, index ) => {
                                    return (
                                        <div className="inputs" key={ index }>
                                            <input type="text" name="title" onChange={ e => controlledLinkInputs( e, index ) } placeholder="Title..." value={ l?.title } />
                                            <input type="text" name="link" onChange={ e => controlledLinkInputs( e, index )  } placeholder="Link..." value={ l?.link } />
                                            <button type="button" onClick={ () => deleteLinkHandler( index) }>
                                                <FontAwesomeIcon icon={ faTrash }/>
                                            </button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="add-wrapper">
                            <button type="button" onClick={ addLinkHandler } >
                                <p> Add New <FontAwesomeIcon icon={ faPlus }/> </p>
                            </button>
                        </div>
                    </div>
                    <div className="buttons-wrapper">
                        <button type="button"> Update </button>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default UpdateComponent