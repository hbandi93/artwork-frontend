import axios from "axios"
import { useEffect, useState } from "react"
import Gallery from "./Gallery"
import objectIDs from "./objectIDs.json"

const GalleryPage = () => {
    const [data, setData] = useState(objectIDs.data.objectIDs)
    const fetchID = async () => {
        await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/search?q=%22%22')
            .then(res => {
                if (res.data.objectIDs) {
                    setData(res.data.objectIDs)
                } else {
                    setData(objectIDs.data.objectIDs)
                }
            })
            .catch(err => { return })
    }
    useEffect(() => {
        fetchID()
    }, [])

    return <div><Gallery objectID={data} /></div>
}

export default GalleryPage