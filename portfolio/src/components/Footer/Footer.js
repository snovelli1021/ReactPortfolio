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
                  className="text-white"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/snovelli1021"
                  alt="Link to GitHub Profile"
                  className="text-white"
                >
                  GitHub
                </a>
              </li>

              <li>
                <a
                  href="https://everettwa.maps.arcgis.com/home/user.html"
                  alt="Link to ArcGIS Online Profile"
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
      </div>
    </MDBFooter>
  );
}
