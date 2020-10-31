import React, { useMemo, useState } from "react";
import SocialMedia from "../../component/social-media/social-media";
import { ISocialMedia } from "../../models/social-media.model";
import "./isometric-media.css";

const IsometricMedia = () => {
  const [mediaState] = useState({
    media: [
      {
        icon: require("../../../assets/images/whatsapp.svg")
      },
      {
        icon: require("../../../assets/images/instagram.svg")
      },
      {
        icon: require("../../../assets/images/facebook.svg")
      },
      {
        icon: require("../../../assets/images/netflix.svg")
      }
    ] as ISocialMedia[]
  });

  const mediaElements = useMemo(
    () =>
      mediaState.media.map((media) => (
        <SocialMedia icon={media.icon}></SocialMedia>
      )),
    [mediaState.media]
  );

  return (
    <div className="media-container">
      <div className="media-list">{mediaElements}</div>
    </div>
  );
};

export default IsometricMedia;
