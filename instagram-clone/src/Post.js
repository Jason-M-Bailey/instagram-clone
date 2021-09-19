import React from "react";
import "./Post.css";

function Post() {
  return (
    <div className="post">
      <h3>Username</h3>
      {/* header -> avatar + username */}

      <img
        class="post__image"
        src="https://pagesix.com/wp-content/uploads/sites/3/2021/09/brie-larson-1.jpg?quality=90&strip=all&w=721"
      ></img>
      {/* image */}

      <h4>Username: caption</h4>
      {/* username + caption */}
    </div>
  );
}

export default Post;
