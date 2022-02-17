import React, { Component, useEffect, useState } from 'react'
import axios from 'axios';

const Gallery = () => {
    const [page, setPage] = useState(1)
    const [source, setSource] = useState([])
    const [index, setIndex] = useState(34)

    const fetchImages = async () => {
        let data = []
        let i = index
        while (data.length < 1) {
            await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/objects/' + i)
                .then(res => {
                    console.log(res.data.isPublicDomain);
                    if (res.data.isPublicDomain) {
                        data.push(res.data)
                    }
                    else { return }
                })
                .catch(err => { return })
            i = i + 1
        }
        setSource(data)
        setIndex(i)
    }

    const previousPage = () => {
        if (page >= 1) {
            setIndex(index - 1)
            setPage(page - 1)
        }
    }

    const nextPage = () => {
        setPage(page + 1)
    }

    useEffect(() => {
        fetchImages()
        console.log("source: ", source, "index: ", index, "page: ", page);
    }, [page])
    return (
        < div key={page}>
            <h1>This is our gallery.</h1>
            {source.map(elem => {
                return <div className='imgContainer' key={elem.accessionNumber}>
                    <h2>{elem.objectName}</h2>
                    <img src={elem.primaryImageSmall} alt="Kép" />
                </div>
            })}
            <button onClick={previousPage} disabled={page === 1}>Previous page</button>
            <button onClick={nextPage}>Next page</button>
        </div >
    );
}

export default Gallery;





