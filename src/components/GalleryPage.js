import axios from "axios"
import { useEffect, useState } from "react"
import Gallery from "./Gallery"
import objectIDs from "./objectIDs.json"

const GalleryPage = () => {
    return <div><Gallery objectID={objectIDs.data.objectIDs} /></div>
}

export default GalleryPage