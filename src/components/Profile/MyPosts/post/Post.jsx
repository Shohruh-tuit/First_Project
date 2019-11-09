import React from "react";
import s from './Post.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faHeart
} from "@fortawesome/free-solid-svg-icons";

const Post = (props) => {
  console.log(props)
  debugger;
  return(
    <div>
      <div className={s.posts}>
        <div className={s.item}>
          <img src="data:image/jpeg;base64,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" />
          {props.message}
          <div>
            <span>
            <FontAwesomeIcon icon={faHeart} size="2px" />
            {" " + props.countLike + " "}
              liked
            </span>
          </div>
        </div>
      </div>
    </div>
    ); 
}

export default Post;
