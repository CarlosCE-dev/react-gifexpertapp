import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [ inputValue, setinputValue] = useState('');

    const handelInputChange = ( e ) => {
        setinputValue( e.target.value )
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        if ( inputValue.trim().length > 2 ){
            setCategories( ctg => [  inputValue, ...ctg ]);
            setinputValue('');
        }
    }

    return (
      <form onSubmit={ handleSubmit }>
          <input
              type="text"
              value={ inputValue }
              onChange={ handelInputChange }
          />
      </form>
    );
      
  }

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
  