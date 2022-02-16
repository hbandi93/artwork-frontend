import axios from 'axios';
import { useEffect } from 'react';





const api = axios.create({
    baseURL: "https://collectionapi.metmuseum.org/public/collection/v1/objects"
})


    axios.get( 'https://collectionapi.metmuseum.org/public/collection/v1/objects')
    .then((response) => {
        console.log(response)
        const myGalery = response.data;
        
    } )
    .catch ((error) => {
        console.log(error)
        });





  