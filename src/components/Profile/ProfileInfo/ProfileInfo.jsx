import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRO2qq03JIOYoctygP3tOnM8egCu7jxqP1baqpElzglBfS9TWHo" />
      </div>
      <div className={s.descriptionBlock} >
        ava + description
      </div>
    </div>
  );
};

export default ProfileInfo;
