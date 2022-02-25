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
        <p>At our Afremov Library we are excited to show our new art gallery! Feel free to browse around, select and save your favourite images.        <br /> 
            <br /> The Metropolitan Museum of Art presents over 5,000 years of art from around the world for everyone to experience and enjoy. The Museum lives in two iconic sites in New York City—The Met Fifth Avenue and The Met Cloisters. Millions of people also take part in The Met experience online. 
            <br /> The Metropolitan Museum of Art provides select datasets of information on more than 470,000 artworks in its Collection for unrestricted commercial and noncommercial use. 
            <br /> This work is published from the United States of America. These select datasets are now available for use in any media without permission or fee; they also include identifying data for artworks under copyright. The datasets support the search, use, and interaction with the Museums collection.
        </p>
        <Link to="/gallery"><button className='homebtn'> Check out the Gallery </button></Link>
        
    </div>
}

export default Home