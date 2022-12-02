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
import photo1 from "./assets/Project1.jpg";
import photo2 from "./assets/Project2.jpg";
import photo3 from "./assets/Project3.jpg";
import photo4 from "./assets/Project4.jpg";
import photo5 from "./assets/Project5.jpg";
import photo6 from "./assets/Project6.jpg";
// import data from "./"

const Projects = () => {
  return (
    <div>
      <h1>My Projects</h1>
      {/* {data.map( ({title, text, url, ...}) =>(
       <CCard className="h-100">
       <CCardImage
         orientation="top"
         className="cardPhoto"
         alt="Screenshot of website or application"
         src={photo1}
       />
       <CCardBody>
         <CCardTitle className="title">{title}</CCardTitle>
         <CCardText>
           {text}
         </CCardText>
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
      ))} */}

      {/* Need to work on row widths and image sizes */}
      <CRow
        xs={{ cols: 1 }}
        md={{ cols: 2 }}
        lg={{ cols: 3 }}
        xl={{ cols: 6 }}
        className="g-4"
      >
        <CCol xs>
          <CCard className="h-100">
            <CCardImage
              orientation="top"
              className="cardPhoto"
              alt="Screenshot of website or application"
              src={photo1}
            />
            <CCardBody>
              <CCardTitle className="title">Password Generator</CCardTitle>
              <CCardText>
                This password generator uses the inquirer.js package to prompt a
                user with a series of questions. Each question defines the
                criteria used to create a randomly generated password. According
                to a user's input value, the app creates a password string and
                prints the output to screen. Learn more at the GitHub Repository
                below.
              </CCardText>
            </CCardBody>
            <CCardFooter>
              <a
                href="https://github.com/snovelli1021/Assignment3"
                target="_blank"
                alt="Link to project repository on GitHub."
                className="text-medium-emphasis"
              >
                <button> GitHub Repository </button>
              </a>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs>
          <CCard className="h-100">
            <CCardImage
              orientation="top"
              className="cardPhoto"
              alt="Screenshot of website or application"
              src={photo2}
            />
            <CCardBody>
              <CCardTitle className="title">Team Profile Generator</CCardTitle>
              <CCardText>
                The Team Profile Generator uses Object Oriented Programming to
                create a class of Employee and it's subclasses: Engineer,
                Intern, and Manager. The input for each team member is ran
                through a unit test to verify that the input value is accepted.
                The application runs on the back-end, and has the results
                printed to a static HTML page. See the GitHub Repository and
                walkthrough video at the link below.
              </CCardText>
            </CCardBody>
            <CCardFooter>
              <a
                href="https://github.com/snovelli1021/Team-Profile-Generator"
                target="_blank"
                alt="Link to project repository on GitHub."
                className="text-medium-emphasis"
              >
                <button> GitHub Repository </button>
              </a>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs>
          <CCard className="h-100">
            <CCardImage
              orientation="top"
              className="cardPhoto"
              alt="Screenshot of website or application"
              src={photo3}
            />
            <CCardBody>
              <CCardTitle className="title">E-commerce Back-end</CCardTitle>
              <CCardText>
                This Express App uses a MySql database, Sequelize, and Insomnia
                to manipulate merchandise data using the CRUD method. Data
                records are initally seeded on the backend, and then accessed
                via Insomnia per the appropriate API routes. View the GitHub
                Repository and walkthrough video at the link below.
              </CCardText>
            </CCardBody>
            <CCardFooter>
              <a
                href="https://github.com/snovelli1021/Object-Relational-Mapping"
                target="_blank"
                alt="Link to project repository on GitHub."
                className="text-medium-emphasis"
              >
                <button> GitHub Repository </button>
              </a>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs>
          <CCard className="h-100">
            <CCardImage
              orientation="top"
              className="cardPhoto"
              alt="Screenshot of website or application"
              src={photo4}
            />
            <CCardBody>
              <CCardTitle className="title">Note Taker</CCardTitle>
              <CCardText>
                Note Taker is an Express App that features a clean front-end
                interface that allows a user to add and delete notes from their
                web browser. The application is deployed live via Heroku
                <a
                  href="https://sheltered-bastion-19776.herokuapp.com/"
                  target="_blank"
                  alt="Link to deployed Note Taker app on Heroku."
                >
                  {` here. `}
                </a>
                You can also find out more at the repository below.
              </CCardText>
            </CCardBody>
            <CCardFooter>
              <a
                href="https://github.com/snovelli1021/NoteTaker2"
                target="_blank"
                alt="Link to project repository on GitHub."
                className="text-medium-emphasis"
              >
                <button> GitHub Repository </button>
              </a>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs>
          <CCard className="h-100">
            <CCardImage
              orientation="top"
              className="cardPhoto"
              alt="Screenshot of website or application"
              src={photo5}
            />
            <CCardBody>
              <CCardTitle className="title">Tech Blog</CCardTitle>
              <CCardText>
                Tech Blog allows a user to create and delete blog posts and add
                comments as long as they are signed in. First time visitors are
                prompted to sign up before they can login and view the
                dashboard. The multiple page application uses Handlebars.js as
                it's templating engine. Click below to view the repository on
                Github.
              </CCardText>
            </CCardBody>
            <CCardFooter>
              <a
                href="https://github.com/snovelli1021/TechBlog"
                target="_blank"
                alt="Link to project repository on GitHub."
                className="text-medium-emphasis"
              >
                <button> GitHub Repository </button>
              </a>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs>
          <CCard className="h-100">
            <CCardImage
              orientation="top"
              className="cardPhoto"
              alt="Screenshot of website or application"
              src={photo6}
            />
            <CCardBody>
              <CCardTitle className="title">Text Editor</CCardTitle>
              <CCardText>
                Text Editor is a Progressive Web App with a new take on the Note
                Taker app. It allows a user to add and delete text from their
                web browser or while offline via local download. The application
                uses the IndexedDB package to persistantly store data in the
                browser. Click
                <a
                  href="https://guarded-sands-11928.herokuapp.com/"
                  target="_blank"
                  alt="Link to deployed Note Taker app on Heroku."
                >
                  {` here `}
                </a>
                to try it now, or check out the repository below.
              </CCardText>
            </CCardBody>
            <CCardFooter>
              <a
                href=" https://github.com/snovelli1021/TextEditor"
                target="_blank"
                alt="Link to project repository on GitHub."
                className="text-medium-emphasis"
              >
                <button> GitHub Repository </button>
              </a>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </div>
  );
};

export default Projects;
