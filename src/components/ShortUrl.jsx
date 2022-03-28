import React from 'react';
import './ShortUrls.css';
import { CgClose, CgInfo } from 'react-icons/cg';
import { useHistory } from 'react-router-dom';

const ShortUrl = ({ shortUrlItem }) => {
    const history = useHistory();

    const handleUrlDetailsClick = () =>{
        history.push(`/${shortUrlItem.id}`);
    }
    return (

        <div className='url-container' > 
            <div className='task-title' >
                {shortUrlItem.shortUrl}
            </div>
            <div className='buttons-container'>
                <button className='button-details' onClick={handleUrlDetailsClick} ><CgInfo /></button>
            </div>
        </div>
    )

};
 
export default ShortUrl;