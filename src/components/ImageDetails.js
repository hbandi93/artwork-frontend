import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './imageDetails.css';
import './gallery.css'

const ImageDetails = () => {
    let { id } = useParams();
    const [imageDetails, setImageDetails] = useState(undefined)

    const sendImage = async () => {
        try {
            const response = await axios.post('http://10.0.0.202:8080/images/tibor',
                [{
                    image_id: imageDetails.objectID,
                    title: imageDetails.title,
                    content: imageDetails.primaryImageSmall,
                    category: imageDetails.objectName,
                    artist: imageDetails.artistDisplayName
                }]
            )
            alert('todo created')
        }
        catch (e) {
            alert('error')
        }
    }

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
            <div className="imgInfo"><img src={imageDetails.primaryImageSmall} alt="kép" /></div>
            <div className="imgInfo">Author : {imageDetails.artistDisplayName}</div>
            {imageDetails.title !== "" ? <div>Title : {imageDetails.title}</div> : <div className="imgInfo">Title : No title</div>}
            <div className="imgInfo">Year : {imageDetails.accessionYear}</div>
            <button className="addtofavbtn" onClick={sendImage}>Add to favourites</button>
        </div> : "image Not found"}
        </div>
    )
}

export default ImageDetails