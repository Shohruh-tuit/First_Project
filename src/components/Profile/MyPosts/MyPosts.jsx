import React from "react";
import s from "./MyPosts.module.css";
import Post from "./post/Post";
import Post2 from "./post2/Post2";

const MyPosts = () => {

  let posts = [
    {id: 1, messages: "Hi, How are you", countLike: 23},
    {id: 2, messages: "It's my first post on React!", countLike: 48},
  ]

  let postsElements = posts.map( p => {
    return <Post message={p.messages} countLike={p.countLike} />
  })
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
      { postsElements }
      </div>
    </div>
  );
};

export default MyPosts;
