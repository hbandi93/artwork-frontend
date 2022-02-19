import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ImageClicker from './ImageClicker';

const Gallery = ({ objectID, browse }) => {
    const [page, setPage] = useState(1)
    const [source, setSource] = useState([])
    const [index, setIndex] = useState(0)
    const [search, setSearch] = useState("")
    const displayNumberOfImages = 10

    const fetchImages = async () => {

        if (!objectID) return

        let data = []
        let i = index

        while (data.length < displayNumberOfImages && data.length !== objectID.length) {
            if (objectID[i]) {
                await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/objects/' + objectID[i])
                    .then(res => {
                        data.push(res.data)
                    })
                    .catch(err => { return })
            }
            i = i + 1
        }
        setSource(data)
        setIndex(i)
    }

    const previousPage = () => {
        if (page >= 1) {
            setIndex(index - (displayNumberOfImages * 2))
            setPage(page - 1)
        }
    }

    const nextPage = () => {
        setPage(page + 1)
    }

    useEffect(() => {
        fetchImages()
    }, [page])

    return (
        < div key={`${page}`}>
            <h1>This is our gallery.</h1>
            <label>Search:
                <input type="text" onChange={(e) => setSearch(e.target.value)} value={search} />
                <button onClick={() => browse(search)}>Search</button>
            </label>
            {!objectID || objectID.length === 0 ? <div>No result found</div> : ""}
            {source.map(elem => <ImageClicker elem={elem} key={elem.accessionNumber} />)}
            <button onClick={previousPage} disabled={page === 1}>Previous page</button>
            <button onClick={nextPage}>Next page</button>
        </div >
    );
}

export default Gallery;





