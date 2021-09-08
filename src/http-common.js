import axios from "axios";
console.log(process.env.REACT_APP_BASE_URL)
export default axios.create({

    baseURL: "http://localhost:9000/",
   // baseURL: process.env.REACT_APP_BASE_URL,
   // baseURL: "https://localhost:44303/api/",
  //  baseURL: "https://metimeapp.azurewebsites.net/api/",
    headers: {
        "Content-type": "application/json",
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
       }
});