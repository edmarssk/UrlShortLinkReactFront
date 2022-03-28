import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import ButtonUrl from './ButtonUrl';
import "./ShortUrlDetails.css";

import axios from 'axios';
import { ExternalLink } from 'react-external-link';

const ShortUrlDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleGoBack = () => {
        history.goBack();
    }

    const api = axios.create({
        baseURL: "https://localhost:44399",
    });

    const [urlLinkItem, setUrlLinkItem] = useState([]);

    useEffect(() => {
      const loadUrlLinks = async ()=> {
        const {data} =await api.get('/urllink/url/details/' + params.id);
        setUrlLinkItem(data);
      }

      loadUrlLinks();
    },[]);
 

    return ( 

        <>
        <div className='back-button-container'>
            <ButtonUrl onClick={handleGoBack}>
                Back
            </ButtonUrl>
        </div>
        <div className='url-details-container'>
            <h2 className='url-details-container'><a href={urlLinkItem.shortUrl} target="_blank" >{urlLinkItem.shortUrl}</a></h2>
            <h4>
                <a href={urlLinkItem.originalUrl} target="_blank" >{urlLinkItem.originalUrl}</a>
            </h4>
        </div>
        </>
     );
}
 
export default ShortUrlDetails;