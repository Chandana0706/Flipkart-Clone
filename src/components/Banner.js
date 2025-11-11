import React from "react";
import "./Banner.css";
import BannerImg from "./images/Banner.jpeg";

function Banner() {
  return (
    <div className="banner">
      <img
        src={BannerImg}
        alt="Banner"
        className="banner-image"
      />
    </div>
  );
}

export default Banner;
