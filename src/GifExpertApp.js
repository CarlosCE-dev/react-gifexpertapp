import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

// FC
export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['One punch']);

    // const handleAdd = () => {
    //     setCategories( [ ...categories, 'Goku' ] )
    // }

    return (
      <>
          <h1>GifExpertApp</h1>
          <AddCategory setCategories={ setCategories }/>
          <hr/>
          <ul>
              {
                categories.map( category => (
                    <GifGrid 
                        key={ category }
                        category={ category }
                    />
                ))
              }
          </ul>
      </>
    );
      
  }
  
  