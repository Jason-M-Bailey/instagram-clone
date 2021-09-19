import React from "react";
import "./App.css";
import Post from "./Post.js";


function App() {
  return (
    <div className="App">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram Logo"
        />
      </div>

      <h1>insta clone</h1>
      {/* HEADER */}

      <Post />
      {/* POST */}
      {/* POST */}
      {/* POST */}
    </div>
  );
}

export default App;
