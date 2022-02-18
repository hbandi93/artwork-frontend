import React,{useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    
    const [allData,setAllData] = useState([]);
    const [filteredData,setFilteredData] = useState(allData);
    

useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/albums/1/photos')
    .then(response => {
        console.log(response.data)
        setAllData(response.data);
        setFilteredData(response.data);
    })
    .catch(error => {
    console.log('Error getting fake data: ' + error);
    })
    
    }, []);

    const handleSearch = (event) =>{
        
        return (
        <div style={{padding:10}}>
            {filteredData.map((value,index)=>{
            <div key={value.id}>
                {value.title}
            </div>
    })}
    </div>
            

    )}
}

export default Search