import axios from "axios";
import { useEffect, useState } from "react";
import Gallery from "./components/Gallery";


function App() {
  return (
    <div className="App">
      <h1>This is our art gallery</h1>
      <Gallery />
    </div>
  );
}

export default App;
