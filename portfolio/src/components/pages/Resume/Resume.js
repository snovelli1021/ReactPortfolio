import React from "react";
import {
  CRow,
  CCol,
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CCardFooter,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import "./Resume.css";
import resumePhoto from "./assets/Resume.jpg";

// Need to write a function to download resume onClick and fill out white space
export default function Resume() {
  return (
    <div>
      <h1>My Resume</h1>
      <CRow xs={{ cols: 1 }} md={{ cols: 2 }} className="g-4">
        <CCol xs>
          <CCard className="h-100">
            <CCardBody>
              <CCardTitle className="title">Professional Skills</CCardTitle>
              <CCardText>
                HTML 5 | CSS | JavaScript ES6 | jQuery | Bootstrap | Git and
                Github | MongoDB | Express | React.js | Node | MySQL | Heroku |
                Insomnia CI/CD | Test Driven Development | Object Oriented
                Programming | Agile Framework | Form Factor Design and Media
                Queries | Jira Software | GIS Digital & Print Media | ArcGIS
                Online | ArcGIS Portal | ArcGIS Storymaps | ArcGIS web apps |
                ArcGIS Pro 2.5 | ArcGIS Desktop 10.X | ArcFM Editor XI | Google
                Earth | Project Planning & Implementation | Data Analysis &
                Visualization | Quality Control & Quality Assurance |
                Cross-Functional Teamwork & Collaboration | Windows PC | OS for
                mac | Android & iOS for Mobile.
              </CCardText>
              {/* need to add word and pdf version of resume to assets folder. */}
              <a href="./assets/Resume.docx" download>
                <button
                  orientation="top"
                  id="resumeWordIcon"
                  alt="Microsoft Word Icon"
                />
              </a>
              <a href="./assets/Resume.pdf" download>
                <button
                  orientation="top"
                  id="resumeAdobeIcon"
                  alt="Adobe pdf Icon"
                  download
                />
              </a>
            </CCardBody>
            <CCardFooter>
              <p> Click an icon above to download my resume</p>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs>
          <CCard className="h-100">
            <CCardBody>
              <CCardTitle className="title">Resume</CCardTitle>
              <CCardImage
                orientation="top"
                id="resumePhoto"
                alt="Static Image of my reume"
                src={resumePhoto}
              />
            </CCardBody>
            <CCardFooter>
              <p> Take a quick glance</p>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </div>
  );
}
