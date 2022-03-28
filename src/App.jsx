import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import ShortUrls from "./components/ShortUrls";
import AddUrl from './components/AddUrl'
import ShortUrlDetails from "./components/ShortUrlDetails";
import ButtonUrl from "./components/ButtonUrl";
import './App.css';

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import axios from 'axios';


const App = () => {
  
    const [urlLinks, setUrlLinks] = useState([]);
    const [pagination, setPagination] = useState(1);
    const[loadVisible, setLoadVisible] = useState(false);

    useEffect(() => {
      const loadUrlLinks = async () => {
        const {data} =await axios.get('https://localhost:44399/urllink/urls/' + pagination);
        setUrlLinks(data);
      }

      loadUrlLinks();

      if(urlLinks.length > 9){
        setLoadVisible(true);
      }
      
    },[]);
   
    const loadUrls = () => {

      const newPagination = pagination + 1;

      setPagination(newPagination);

      const loadMoreUrlLinks = async ()=> {
        const {data} =await axios.get('https://localhost:44399/urllink/urls/' + pagination);
        setUrlLinks(data);
      }
      loadMoreUrlLinks();
     
    };

    const handleNewUrl = (originalUrl) =>{
      const newUrlLinks =  ()=> {
        const {data} = axios.post('https://localhost:44399/urllink',{ OriginalUrl : originalUrl })
        .then((reponse) => {

          const result = urlLinks.find( urllist => urllist.id === reponse.data.data.id);
          if(result == undefined || result == null){
            const newUrl = [
              ...urlLinks,
                {
                  "id": reponse.data.data.id,
                  "shortUrl": reponse.data.data.shortUrl,
                  "originalUrl": reponse.data.originalUrl,
                  "registrationDate": reponse.data.registrationDate,
                  "active": reponse.data.active
                }
            ];
            setUrlLinks(newUrl);
        }
        
        })
        .catch((err) => {
          alert("ops! Somethigng happened. " + err);
        });
      };
      newUrlLinks();

      if(urlLinks.length > 9){
        setLoadVisible(true);
      }
    };

 return (   
   <>
 <Router>
    <div className="container">
        <Header></Header>
        <Route 
          path='/' 
          exact
          render={() => (
          <>
            <AddUrl handleNewUrl={ handleNewUrl }></AddUrl>
            <ShortUrls listShortUrl={ urlLinks }  >
            </ShortUrls>
            { loadVisible && <div><ButtonUrl onClick={loadUrls}>Load</ButtonUrl></div> }
          </>
           )  } 
           />
           <Route path='/:id' exact component={ShortUrlDetails} />
    </div>
  </Router>
  </>
 );
 };

export default App