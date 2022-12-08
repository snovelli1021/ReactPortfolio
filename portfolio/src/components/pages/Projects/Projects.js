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
import "./Projects.css";
import React from "react";
import data from "./projectData.json";

const Projects = () => {
  return (
    <div>
      <h1>My Projects</h1>
      {/* Need to style columns and column height and fix image sizes. */}
      <CRow>
        {data.map(({ prjPhoto, prjTitle, prjText, prjUrl }) => (
          <CCard className="h-100">
            <CCardImage
              orientation="top"
              className="cardPhoto"
              alt="Screenshot of website or application"
              src={prjPhoto}
            />
            <CCardBody>
              <CCardTitle className="title">{prjTitle}</CCardTitle>
              <CCardText>{prjText}</CCardText>
            </CCardBody>
            <CCardFooter>
              <a
                href={prjUrl}
                target="_blank"
                alt="Link to project repository on GitHub."
                className="text-medium-emphasis"
              >
                <button> GitHub Repository </button>
              </a>
            </CCardFooter>
          </CCard>
        ))}
      </CRow>
    </div>
  );
};

export default Projects;
