import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ImageDetails = () => {
    let { id } = useParams();
    const [imageDetails, setImageDetails] = useState(undefined)

    const sendImage = async () => {
        try {
            const response = await axios.post('http://localhost:4000/',
                {
                    url: {
                        image_id: imageDetails.objectID,
                        title: imageDetails.title,
                        content: imageDetails.primaryImageSmall,
                        category: imageDetails.objectName,
                        artist: imageDetails.artistDisplayName
                    }
                })
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
        <div> {imageDetails ? <div>
            <div>Details </div>
            <div><img src={imageDetails.primaryImageSmall} alt="kép" /></div>
            <div>Author : {imageDetails.artistDisplayName}</div>
            {imageDetails.title !== "" ? <div>Title : {imageDetails.title}</div> : <div>Title : No title</div>}
            <div>Year : {imageDetails.accessionYear}</div>
            <button onClick={sendImage}>Add to favourites</button>
        </div> : "image Not found"}
        </div>
    )
}

export default ImageDetails