import React from "react";
import s from './styles/Profile.module.css';

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQfWDuN0WJnyE65UxVVU1HffCt_l_Bp__4IJulfKmOd0cChyByZ" />
      </div>
      <div>ava + description</div>
      <div>
        My posts
        <div>New posts</div>
      </div>
      <div className={s.posts}>
        <div className={s.item}>post 1</div>
        <div className={s.item}>post 2</div>
      </div>
    </div>
  );
};

export default Profile;
