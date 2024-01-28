import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface SearchType {
    search: string;
}

const Search = () => {

    const [ value, setValue ] = useState<SearchType>( { search: '' } );

    const searchChangeEvent = ( e: React.ChangeEvent<HTMLInputElement> ) => {

        const name: string = e.target.name;
        const value: string = e.target.value;

        setValue( ( p ) => ( { ...p, [name]: value } ) )

    }

    const searchHandler: React.MouseEventHandler<HTMLButtonElement> = async () => {
        alert('hlo')
        try {
            

        } catch (error) {
            

        }

    }

    return (
        <div className="search-wrapper">
            <input type="text" name="search" onChange={ searchChangeEvent } value={ value?.search } placeholder="Search..."/>
            <button type="button" onClick={ searchHandler }>
                <FontAwesomeIcon icon={ faSearch } />
            </button>
        </div>
    )

}

export default Search;