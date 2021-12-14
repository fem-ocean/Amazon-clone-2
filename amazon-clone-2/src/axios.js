import axios from 'axios';

const instance = axios.create({
    baseURL: "https://us-central1-clone-2-46594.cloudfunctions.net/api"  
    
    // http://localhost:5001/clone-2-46594/us-central1/api
    
      //The API URL (cloud function)
});

export default instance;