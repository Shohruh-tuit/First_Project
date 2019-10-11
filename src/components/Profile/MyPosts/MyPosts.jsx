import React from "react";
import s from "./MyPosts.module.css";
import Post from "./post/Post";
import Post2 from "./post2/Post2";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>New posts</div>
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <Post message='Hi, How are you' countLike='23' />
      <Post2 message="It's my first post on React!" countLike='48' />
    </div>
  );
};

export default MyPosts;
