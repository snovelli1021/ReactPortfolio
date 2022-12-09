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
import skillsData from "./skillsData.json";
import resumeData from "./resumeData.json";

const Resume = () => {
  return (
    <div>
      <h1>My Resume</h1>
      {/* Need to style columns and column height and fix image sizes. */}
      <CRow>
        {skillsData.map(({ skillsTitle, skillsText, skillsFooter }) => (
          <CCard className="h-100">
            <CCardBody>
              <CCardTitle className="title">{skillsTitle}</CCardTitle>
              <CCardText>{skillsText}</CCardText>
              <a href="./assets/NovelliResume.docx" download>
                <button
                  orientation="top"
                  id="resumeWordIcon"
                  alt="Microsoft Word Icon"
                />
              </a>
              {/* Uncomment for future deployment. Need to download Adobe Suite.  */}
              {/* <a href="./assets/Resume.pdf" download>
                <button
                  orientation="top"
                  id="resumeAdobeIcon"
                  alt="Adobe pdf Icon"
                  download
                />
              </a> */}
            </CCardBody>
            <CCardFooter>{skillsFooter}</CCardFooter>
          </CCard>
        ))}
        {resumeData.map(({ resumeTitle, resumePhoto, resumeFooter }) => (
          <CCard className="h-100">
            <CCardTitle className="title">{resumeTitle}</CCardTitle>
            <CCardImage
              id="resumePhoto"
              orientation="top"
              alt="Screenshot of website or application"
              src={resumePhoto}
            />

            <CCardFooter>{resumeFooter}</CCardFooter>
          </CCard>
        ))}
      </CRow>
    </div>
  );
};

// Need to write a function to download resume onClick and fill out white space
// export default function Resume() {
//   return (
//     <div>
//       <h1>My Resume</h1>
//       <CRow xs={{ cols: 1 }} md={{ cols: 2 }} className="g-4">
//         <CCard className="h-100">
//           <CCardBody>
//             <CCardTitle className="title">Professional Skills</CCardTitle>
//             <CCardText>
//               HTML 5 | CSS | JavaScript ES6 | jQuery | Bootstrap | Git and
//               Github | MongoDB | Express | React.js | Node | MySQL | Heroku |
//               Insomnia CI/CD | Test Driven Development | Object Oriented
//               Programming | Agile Framework | Form Factor Design and Media
//               Queries | Jira Software | GIS Digital & Print Media | ArcGIS
//               Online | ArcGIS Portal | ArcGIS Storymaps | ArcGIS web apps |
//               ArcGIS Pro 2.5 | ArcGIS Desktop 10.X | ArcFM Editor XI | Google
//               Earth | Project Planning & Implementation | Data Analysis &
//               Visualization | Quality Control & Quality Assurance |
//               Cross-Functional Teamwork & Collaboration | Windows PC | OS for
//               mac | Android & iOS for Mobile.
//             </CCardText>
//             {/* need to add word and pdf version of resume to assets folder. */}
//             <a href="./assets/Resume.docx" download>
//               <button
//                 orientation="top"
//                 id="resumeWordIcon"
//                 alt="Microsoft Word Icon"
//               />
//             </a>
//             <a href="./assets/Resume.pdf" download>
//               <button
//                 orientation="top"
//                 id="resumeAdobeIcon"
//                 alt="Adobe pdf Icon"
//                 download
//               />
//             </a>
//           </CCardBody>
//           <CCardFooter>
//             <p> Click an icon above to download my resume</p>
//           </CCardFooter>
//         </CCard>
//         <CCard className="h-100">
//           <CCardBody>
//             <CCardTitle className="title">Resume</CCardTitle>
//             <CCardImage
//               orientation="top"
//               id="resumePhoto"
//               alt="Static Image of my reume"
//               src={resumePhoto}
//             />
//           </CCardBody>
//           <CCardFooter>
//             <p> Take a quick glance</p>
//           </CCardFooter>
//         </CCard>
//       </CRow>
//     </div>
//   );
// }

export default Resume;
