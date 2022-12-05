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
import "./Projects.css";
import React from "react";
import data from "./data.json";

const Projects = () => {
  return (
    <div>
      <h1>My Projects</h1>
      {/* Need to style columns and column height and fix image sizes. */}
      <CRow
        xs={{ cols: 1 }}
        md={{ cols: 2 }}
        lg={{ cols: 3 }}
        xl={{ cols: 6 }}
        className="g-4"
      >
        {data.map(({ photoUrl, title, text, url }) => (
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
            <CCardFooter>
              <a
                href={url}
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
