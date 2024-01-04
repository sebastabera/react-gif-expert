import { useState } from "react";
import PropTypes from 'prop-types';

export const ChangeSearch = ({onNewSearch}) => {
  
    const [inputValue, setinputValue] = useState('')

    const onInputChange = ({target}) => {
        setinputValue(target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;

        onNewSearch(inputValue.trim());
        setinputValue('');
    };

    return (
        <form onSubmit={onSubmit} aria-label="form" >
            <input 
                type="text" 
                placeholder="User ID" 
                value={inputValue}
                onChange={onInputChange} 
                required />
        </form>
       
    )
}

ChangeSearch.propTypes = {
    onNewSearch: PropTypes.func.isRequired
}