import React from "react";
import { ISocialMedia } from "../../models/social-media.model";
import "./social-media.css";

const SocialMedia = (props: ISocialMedia) => {
  return (
    <div className="icon-container">
      <span className="layer1"></span>
      <span className="layer2"></span>
      <span className="layer3"></span>
      <span className="layer4"></span>
      <span className="media-icon-layer">
        <img src={props.icon} alt="Social Media Icon"></img>
      </span>
    </div>
  );
};

export default SocialMedia;
