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
import "./AboutMe.css";
import profilePicture from "./assets/ProfilePicture.jpg";
import DominionEnergy from "./assets/DominionEnergy.jpg";
import EverettLogo from "./assets/EverettLogo.jpg";
import ShipLogo from "./assets/ShipLogo.png";
import UWLogo from "./assets/UWLogo.png";

const AboutMe = () => {
  return (
    <div>
      <h1>About Me</h1>
      <h3>Bio</h3>
      <CRow xs={{ cols: 1 }} md={{ cols: 3 }} className="g-4">
        <CCol xs>
          <CCard className="h-100">
            <CCardImage
              orientation="top"
              id="profilePicture"
              alt="Profile Picture"
              src={profilePicture}
            />
            <CCardBody>
              <CCardTitle class="title">Stephen Novelli Is...</CCardTitle>
              <CCardText>
                passionate about developing web applications and refactoring
                digital media for an improved user experience. My unique
                education and professional skills provide a specialized
                background of being a front-end and back-end developer with
                hands on experience as an end user. Specialize in the MERN stack
                and front-end development. A global thinker with the ability to
                comprehend cross-functional integrations, effective and clear
                communicator, detail-oriented professional that works well
                collaboratively and successfully meets deadlines. Quick learner
                with the ability to handle frequently changing developments in a
                rapidly evolving technological environment.
              </CCardText>
            </CCardBody>
            <CCardFooter>
              <p> Currently in the Seattle Area</p>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
      <h3>Professional Experience</h3>
      <CRow xs={{ cols: 1 }} md={{ cols: 3 }} className="g-4">
        <CCol xs>
          <CCard className="h-100">
            <CCardImage
              orientation="top"
              className="abtMeCardPhoto"
              alt="Screenshot of Dominion Energy Logo"
              src={DominionEnergy}
            />
            <CCardBody>
              <CCardTitle class="title">Dominion Energy</CCardTitle>
              <CCardText>
                <ul>
                  <li>
                    Team lead for ArcGIS Pro training, correcting Utility
                    Network Errors, and maintaining System Tier Subnetworks.
                  </li>
                  <br></br>
                  <li>
                    Corrected source data in the Geometric Network to align with
                    the Utility Pipeline Data Model and Utility Network rules.
                  </li>
                  <br></br>
                  <li>
                    Assisted development team on schema changes and metadata
                    generation.
                  </li>
                </ul>
              </CCardText>
            </CCardBody>
            <CCardFooter>
              <p> November 2015 - August 2021</p>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs>
          <CCard className="h-100">
            <CCardImage
              orientation="top"
              className="abtMeCardPhoto"
              alt="Screenshot of City of Everett Logo"
              src={EverettLogo}
            />
            <CCardBody>
              <CCardTitle class="title">City of Everett</CCardTitle>
              <CCardText>
                <ul>
                  <li>
                    Utility Mapping team lead for converting Classic Story Maps
                    to ArcGIS StoryMaps, refactored enterprise web maps into
                    scalable web apps for more proficient consumption of data.
                  </li>
                  <br></br>
                  <li>
                    Indexed city record drawings and geotechnical reports using
                    Laserfiche 11, georeferenced and digitized indexed files
                    into GIS.
                  </li>
                </ul>
              </CCardText>
            </CCardBody>
            <CCardFooter>
              <p> August 2021 - Present</p>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
      <h3>Education</h3>
      <CRow xs={{ cols: 1 }} md={{ cols: 3 }} className="g-4">
        <CCol xs>
          <CCard className="h-100">
            <CCardImage
              orientation="top"
              className="abtMeCardPhoto"
              alt="Screenshot of Shippensburg University Logo"
              src={ShipLogo}
            />
            <CCardBody>
              <CCardTitle class="title">
                Shippensburg University of Pennsylvania
              </CCardTitle>
              <CCardText>
                B.S. Geoenvironmental Studies & GIS Letter of Completion.
                Shippensburg University, Shippensburg, PA. 2015 Provost Award
                for the College of Arts and Sciences.
              </CCardText>
            </CCardBody>
            <CCardFooter>
              <p> August 2015</p>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs>
          <CCard className="h-100">
            <CCardImage
              orientation="top"
              className="abtMeCardPhoto"
              alt="Screenshot of the University of Washington Logo"
              src={UWLogo}
            />
            <CCardBody>
              <CCardTitle class="title">University of Washington</CCardTitle>
              <CCardText>
                UW Coding Bootcamp Fullstack Web Development. University of
                Washington, Seattle, WA.
              </CCardText>
            </CCardBody>
            <CCardFooter>
              <p> December 2022</p>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </div>
  );
};

export default AboutMe;
