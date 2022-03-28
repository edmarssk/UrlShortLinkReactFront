import React from 'react';
import './ShortUrls.css';
import ShortUrl from './ShortUrl';

const ShortUrls = ({ listShortUrl }) => {
   
    return (
        <>
           { listShortUrl.map((item) => 
           <ShortUrl shortUrlItem={ item } >
            </ShortUrl> ) }
        </>
    );
};

export default ShortUrls;
