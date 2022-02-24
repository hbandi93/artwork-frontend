import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './imageDetails.css';
import './gallery.css'

const ImageDetails = () => {
    let { id } = useParams();
    const [imageDetails, setImageDetails] = useState(undefined)

    const fetchImage = async () => {
            await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/objects/' + id)
                .then(res => {
                    setImageDetails(res.data)
                })
                .catch(err => { return })
    }

    useEffect(() => {
        fetchImage()
    }, [id])

    return (
        <div > {imageDetails ? <div>
            <div>Details </div>
            <div><h1> {imageDetails.title}</h1></div>
            <div className="imgInfo"><img src={imageDetails.primaryImageSmall} alt="kép" /></div>
            <div className="imgInfo">Author : {imageDetails.artistDisplayName}</div>
            <div className="imgInfo">Year : {imageDetails.accessionYear}</div>
            <button className="addtofavbtn">Add to Favourites</button>
            </div> :"image Not found"}
        </div>  
    )
}

export default ImageDetails