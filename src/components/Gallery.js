import React, { Component } from 'react'
import axios from 'axios';

class Gallery extends Component {
    state = {
        page: 1,
        src: [],
        ind: 0
    }
    async componentDidMount() {
        let source = []
        let i = 0
        while (source.length < 11) {
            i = i + 1
            await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/objects/' + i)
                .then(res => {
                    console.log(res.data.isPublicDomain);
                    if (res.data.isPublicDomain) {
                        source.push(res.data)
                    }
                    else { return }
                })
                .catch(err => { return })
        }
        this.setState({ src: source, ind: i })
    }
    render() {
        return (
            < div >
                <h1>This is our gallery.</h1>
                {this.state.src.map(elem => {
                    return <div>
                        <h2>{elem.objectName}</h2>
                        <img src={elem.primaryImageSmall} alt="Kép" />
                    </div>
                })}
            </div >
        );
    }
}

export default Gallery;





