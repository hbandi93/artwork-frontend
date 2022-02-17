import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Profile from "./components/Profile";
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
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
        <footer>Ez a footer</footer>
      </div>
    </Router>
  );
}

export default App;
