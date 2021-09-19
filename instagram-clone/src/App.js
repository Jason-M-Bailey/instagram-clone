import React, { useState } from "react";
import "./App.css";
import Post from "./Post.js";

// restore seed data - prior to 1:07:00
function App() {
  const [posts, setPosts] = useState([
    {
      username: "tony",
      caption: "i should have stopped right here",
      imageUrl: "https://cdn.vox-cdn.com/thumbor/UjJJtbVjzjURf6oiXSa0SomaEfU=/0x0:3000x1779/1200x800/filters:focal(1204x216:1684x696)/cdn.vox-cdn.com/uploads/chorus_image/image/59606327/ktokatitmir0.0.jpg"
    },
    {
      username: "cap",
      caption: "y'all play too much",
      imageUrl: "https://www.cnet.com/a/img/Wz-adMlB40-wq6qcyvCGYZGtJ8w=/940x0/2020/09/26/2cc8eae6-aafd-4895-849c-2dd489bad012/capamerica1.jpg"
    },
    {
      username: "tasha",
      caption: "black or white?",
      imageUrl: "https://d23.com/app/uploads/2021/07/1180w-600h_070721_Black-Widow-Guide-780x440.jpg"
    },
    {
      username: "hawk",
      caption: "og status",
      imageUrl: "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/04/Avengers-Endgame-Original-Six.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5"
    },
    {
      username: "smart hulk",
      caption: "the best line",
      imageUrl: "https://thumbs.gfycat.com/FlatIdealisticBoaconstrictor-max-1mb.gif"
    },
    {
      username: "thor",
      caption: "you didn't know i had it like this",
      imageUrl: "https://www.denofgeek.com/wp-content/uploads/2019/07/thor-4-marvel-chris-hemsworth.jpg?resize=768%2C432"
    },
  ]);


  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src={
            "https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          }
          alt="Instagram Logo"
        />
      </div>

      {posts.map((post) => (
        <Post
          avatar={post.avatar}
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
