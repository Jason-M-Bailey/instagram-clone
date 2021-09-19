import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post() {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="username"
          src="/static/images/avatar/1.jpg"
        />
        <h3>Username</h3>
      </div>
      {/* header -> avatar + username */}

      <img
        class="post__image"
        src="https://pagesix.com/wp-content/uploads/sites/3/2021/09/brie-larson-1.jpg?quality=90&strip=all&w=721"
      ></img>
      {/* image */}

      <h4 className="post__text">
        <strong>brie</strong> hi :)
      </h4>
      {/* username + caption */}
    </div>
  );
}

export default Post;
