import axios from "axios"
import { useState } from "react"
import Gallery from "./Gallery"
import objectIDs from "./objectIDs.json"

const GalleryPage = () => {
    const [objectID, setObjectID] = useState(objectIDs.data.objectIDs)
    const browse = (search) => {
        axios.get('https://collectionapi.metmuseum.org/public/collection/v1/search?q=' + search)
            .then(res => {
                setObjectID(res.data.objectIDs)
            })
            .catch(err => {
                setObjectID([])
            })
    }

    const objectIDLength = objectID ? objectID.length : 0
    const hasElements = objectIDLength > 0

    return < div key={`${objectIDLength}-${hasElements && objectID[0]}-${hasElements && objectID[objectIDLength - 1]}`}>
        <Gallery objectID={objectID} browse={browse} />
    </div>

}

export default GalleryPage