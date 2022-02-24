import './home.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

const Home = () => {
    return <div className='home'>
        <p>Welcome to PicPicker!</p>
        <p>Here you can browse and select your favourite pictures. You can give tags to the artworks to find them easier.</p>
        <button className='homebtn'> <Link to="/gallery">Check out the Gallery</Link> </button>
    </div>
}

export default Home