import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQfWDuN0WJnyE65UxVVU1HffCt_l_Bp__4IJulfKmOd0cChyByZ" />
      </div>
      <div>ava + description</div>
      <MyPosts />
      </div>
);
}

export default Profile;
