import React, {useState} from "react";
import "./App.css";
import Post from "./Post.js";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "briemferlarson",
      caption: "hi",
      imageUrl:
        "https://pagesix.com/wp-content/uploads/sites/3/2021/09/brie-larson-2.jpg?quality=80&strip=all",
    },
    {
      username: "briemferlarson",
      caption: "capt mvl",
      imageUrl:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/brie-larson-1543939238.jpg",
    },
  ]);

  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src={"https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"}
          alt="Instagram Logo"
        />
      </div>

      <h1>insta clone</h1>

      {
      posts.map(post => (
        <Post
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
