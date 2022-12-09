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
        {bioData.map(({ bioPhoto, bioTitle, bioText, bioFooter }) => (
          <CCard className="h-100">
            <CCardImage
              orientation="top"
              className="profilePhoto"
              alt="Screenshot of website or application"
              src={bioPhoto}
            />
            <CCardBody>
              <CCardTitle className="title">{bioTitle}</CCardTitle>
              <CCardText>{bioText}</CCardText>
            </CCardBody>
            <CCardFooter>{bioFooter}</CCardFooter>
          </CCard>
        ))}
      </CRow>
      <div>
        <div>
          <h3>Professional Experience</h3>
        </div>
        <CRow>
          {workData.map(({ workPhoto, workTitle, workText, workFooter }) => (
            <CCard className="h-100">
              <CCardImage
                orientation="top"
                className="cardPhoto"
                alt="Screenshot of website or application"
                src={workPhoto}
              />
              <CCardBody>
                <CCardTitle className="title">{workTitle}</CCardTitle>
                <CCardText>{workText}</CCardText>
              </CCardBody>
              <CCardFooter>{workFooter}</CCardFooter>
            </CCard>
          ))}
        </CRow>
      </div>
      <div>
        <div>
          <h3>Educational Experience</h3>
        </div>
        <CRow>
          {educationData.map(
            ({
              educationPhoto,
              educationTitle,
              educationText,
              educationFooter,
            }) => (
              <CCard className="h-100">
                <CCardImage
                  orientation="top"
                  className="cardPhoto"
                  alt="Screenshot of website or application"
                  src={educationPhoto}
                />
                <CCardBody>
                  <CCardTitle className="title">{educationTitle}</CCardTitle>
                  <CCardText>{educationText}</CCardText>
                </CCardBody>
                <CCardFooter>{educationFooter}</CCardFooter>
              </CCard>
            )
          )}
        </CRow>
      </div>
    </div>
  );
};

export default AboutMe;
