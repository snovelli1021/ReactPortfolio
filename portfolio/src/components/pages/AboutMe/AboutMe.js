import React from "react";
import {
  CRow,
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CCardFooter,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import "./AboutMe.css";
import bioData from "./bioData.json";
import workData from "./workData.json";
import educationData from "./educationData.json";

const AboutMe = () => {
  return (
    <div>
      <h1>About Me</h1>
      <div>
        <h3>Personal Bio</h3>
      </div>
      {/* Need to style columns and column height and fix image sizes. */}
      <CRow>
        {bioData.map(({ photoUrl, title, text, footer }) => (
          <CCard className="h-100">
            <CCardImage
              orientation="top"
              className="cardPhoto"
              alt="Screenshot of website or application"
              src={photoUrl}
            />
            <CCardBody>
              <CCardTitle className="title">{title}</CCardTitle>
              <CCardText>{text}</CCardText>
            </CCardBody>
            <CCardFooter>{footer}</CCardFooter>
          </CCard>
        ))}
      </CRow>
      <div>
        <div>
          <h3>Professional Experience</h3>
        </div>
        <CRow>
          {workData.map(({ photoUrl, title, text, footer }) => (
            <CCard className="h-100">
              <CCardImage
                orientation="top"
                className="cardPhoto"
                alt="Screenshot of website or application"
                src={photoUrl}
              />
              <CCardBody>
                <CCardTitle className="title">{title}</CCardTitle>
                <CCardText>{text}</CCardText>
              </CCardBody>
              <CCardFooter>{footer}</CCardFooter>
            </CCard>
          ))}
        </CRow>
      </div>
      <div>
        <div>
          <h3>Educational Experience</h3>
        </div>
        <CRow>
          {educationData.map(({ photoUrl, title, text, footer }) => (
            <CCard className="h-100">
              <CCardImage
                orientation="top"
                className="cardPhoto"
                alt="Screenshot of website or application"
                src={photoUrl}
              />
              <CCardBody>
                <CCardTitle className="title">{title}</CCardTitle>
                <CCardText>{text}</CCardText>
              </CCardBody>
              <CCardFooter>{footer}</CCardFooter>
            </CCard>
          ))}
        </CRow>
      </div>
    </div>
  );
};

export default AboutMe;
