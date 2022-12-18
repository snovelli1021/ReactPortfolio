import React from "react";
import "./Footer.css";
import data from "./footerData.json";

export default function Footer() {
  return (
    <div className="container-fluidFooter">
      <div className="contact">
        <h5>Contact:</h5>
      </div>
      {data.map(({ url, profile }) => (
        <div className="footerBlock">
          <ul className="profileLinks">
            <li>
              <a href={url} alt="Link to online profile" target="blank">
                {profile}
              </a>
            </li>
          </ul>
        </div>
      ))}
      <div
        className="text-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2022 Copyright:
        <p> Stephen Novelli</p>
        <br></br>
        {/* Background Image Source: Adam San, "BLACK AND GOLD HOT POWERPOINT BACKGROUND", SLIDEBACKGROUND.com, Feb 18, 2021, https://www.slidebackground.com/free-image/black-and-gold-hot-powerpoint-background-5112.html */}
        <a
          className="imageText"
          id="imageSrc"
          href="https://www.slidebackground.com/free-image/black-and-gold-hot-powerpoint-background-5112.html"
          target="blank"
        >
          Background Image:
        </a>
      </div>
    </div>
  );
}
