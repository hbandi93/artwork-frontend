import Home from "./components/Home";
import GalleryPage from "./components/GalleryPage";
import Profile from "./components/Profile";
import ImageDetails from "./components/ImageDetails";
import Signup from "./components/Signup";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/signup">Sign up</Link></li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/gallery" element={<GalleryPage />}></Route>
          <Route path="/gallery/images/:id" element={<ImageDetails />} />
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
        <footer>Copyright A|M|A</footer>
      </div>
    </Router>
  );
}

export default App;
