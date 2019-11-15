import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQfWDuN0WJnyE65UxVVU1HffCt_l_Bp__4IJulfKmOd0cChyByZ" />
      </div>
      <div className={s.descriptionBlock} >
        ava + description
      </div>
    </div>
  );
};

export default ProfileInfo;
