import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
        <div> {imageDetails ? <div>
            <div>Details </div>
            <div><img src={imageDetails.primaryImageSmall} alt="kép" /></div>
            <div>Author : {imageDetails.artistDisplayName}</div>
            <div>Title : {imageDetails.title}</div>
            <div>Year : {imageDetails.accessionYear}</div>
            </div> :"image Not found"}
        </div>  
    )
}

export default ImageDetails