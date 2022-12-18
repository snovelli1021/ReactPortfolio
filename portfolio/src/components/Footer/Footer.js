import React from "react";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import "./Footer.css";

export default function Footer() {
  return (
    <MDBFooter
      className="bg-secondary text-white text-center text-md-start"
      id="footerCustom"
    >
      <MDBContainer className="p-4">
        <MDBRow>
          <MDBCol>
            <h5 className="text-uppercase">Contact:</h5>

            <p>snovelli92@msn.com</p>
          </MDBCol>

          <MDBCol lg="4" md="4" className="mb-4 mb-md-0">
            <h5 className="text-uppercase.mb-0">Links:</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://www.linkedin.com/in/stephen-novelli-a4b97b242/"
                  alt="Link to LinkedIn Profile"
                  target="blank"
                  className="text-white"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/snovelli1021"
                  alt="Link to GitHub Profile"
                  target="blank"
                  className="text-white"
                >
                  GitHub
                </a>
              </li>

              <li>
                <a
                  href="https://www.arcgis.com/home/user.html?user=SNovelli"
                  alt="Link to ArcGIS Online Profile"
                  target="blank"
                  className="text-white"
                >
                  ArcGIS Online
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2022 Copyright:
        <a> Stephen Novelli</a>
        <br></br>
        {/* Background Image Source: Adam San, "BLACK AND GOLD HOT POWERPOINT BACKGROUND", SLIDEBACKGROUND.com, Feb 18, 2021, https://www.slidebackground.com/free-image/black-and-gold-hot-powerpoint-background-5112.html */}
        <a
          id="imageSrc"
          href="https://www.slidebackground.com/free-image/black-and-gold-hot-powerpoint-background-5112.html"
          target="blank"
        >
          Background Image:
        </a>
      </div>
    </MDBFooter>
  );
}
