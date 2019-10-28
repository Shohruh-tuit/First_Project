import React from "react";
import s from "./MyPosts.module.css";
import Post from "./post/Post";
import Post2 from "./post2/Post2";

const MyPosts = () => {
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>New posts</div>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
      <Post message="Hi, How are you" countLike="23" />
      <Post2 message="It's my first post on React!" countLike="48" />
      </div>
    </div>
  );
};

export default MyPosts;
