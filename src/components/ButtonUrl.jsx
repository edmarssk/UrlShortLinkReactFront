import React from 'react';
import './ButtonUrl.css'

const ButtonUrl = ({ children, onClick }) => {
    return (
        <>
            <button className='button-url' onClick={onClick}>
                {children}
            </button>
        </>
      );
}
 
export default ButtonUrl;