import React from 'react';
import axios from 'axios';

const ServicesUrl = () => {

    const api = axios.create({
        baseURL: "https://localhost:5001",
    });

    const [urlLinks,setUrlLinks] = useState();

    useEffect(() =>{
        const repos = async () => {
          const {data} = await api.get("api/v1/procedimentos");
          setUrlLinks(data);
        }
        repos();
      })

    return ( urlLinks );
}
 
export default ServicesUrl;