import React from "react";
import "./App.css";
import PhotoList from "./Components/PhotoList";

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <PhotoList />
    </div>
  );
}

export default App;
