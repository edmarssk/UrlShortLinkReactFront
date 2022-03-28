import React, { useState } from 'react';
import './AddUrl.css';
import ButtonUrl from './ButtonUrl';

const AddUrl  = ({ handleNewUrl }) => {
    const [inputData, setInputData] = useState('');

    const handleInputChange = (e) =>{
        setInputData(e.target.value);
  };

  const[requiredField,setRequiredField] = useState(false);

  const handleAddUrlClick = () => {
    if(inputData.length == 0)
    {
        setRequiredField(true);
        return;
    }
       
    setRequiredField(false);
    handleNewUrl(inputData);
    setInputData('');
  };

    return ( 
        <>
            <div className='add-url-container' >
                <input onChange={handleInputChange} 
                    value={inputData} 
                    className='add-url-input' 
                    type="text" />
                <div className='add-url-button-container'>
                    <ButtonUrl onClick={handleAddUrlClick} >Create short Url</ButtonUrl>
                </div>
            </div>
            { requiredField &&
            <div><span style={{color: "red"}} >Insert a valid url!</span></div> 
            }   
        </>
     );
}
 
export default AddUrl;