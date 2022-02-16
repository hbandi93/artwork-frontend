import Home from "./components/Home";
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
              <li><Link style={{ textDecoration: 'none' }} to="/">Home</Link></li>
              <li>Gallery</li>
              <li>Profile</li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <footer>Ez a footer</footer>
      </div>
    </Router>
  );
}

export default App;
