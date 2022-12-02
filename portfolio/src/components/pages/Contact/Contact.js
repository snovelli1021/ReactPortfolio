import React from "react";
import { CForm, CFormLabel, CFormInput, CFormText } from "@coreui/react";
import "./Contact.css";

//Write function to submit form and style page
const Contact = () => {
  return (
    <div>
      <h1>Contact Me</h1>
      <CForm className="contactForm">
        <CFormLabel id="formLabel" htmlFor="exampleFormControlInput1">
          Please enter your information in the form below
        </CFormLabel>
        <textarea
          type="input"
          id="nameInput"
          placeholder="First and Last Name"
          aria-describedby="exampleFormControlInputHelpInline"
        />
        <textarea
          type="email"
          id="emailInput"
          placeholder="emailaddress@example.com"
          aria-describedby="exampleFormControlInputHelpInline"
        />
        <textarea
          type="input"
          id="messageInput"
          placeholder="Please leave a detailed message"
          aria-describedby="exampleFormControlInputHelpInline"
        />
        <CFormText component="span" id="formMessageLabel">
          Message must be less than 200 characters.
        </CFormText>
        <button id="submitBtn">Submit!</button>
      </CForm>

      {/* Original copy of form */}
      {/* <CForm className="contactForm">
        <CFormLabel id="formLabel" htmlFor="exampleFormControlInput1">
          Please enter your information in the form below
        </CFormLabel>
        <CFormInput
          type="name"
          id="nameInput"
          placeholder="First and Last Name"
          aria-describedby="exampleFormControlInputHelpInline"
        />
        <CFormInput
          type="email"
          id="emailInput"
          placeholder="emailaddress@example.com"
          aria-describedby="exampleFormControlInputHelpInline"
        />
        <CFormInput
          type="Message"
          id="messageInput"
          placeholder="Please leave a detailed message"
          aria-describedby="exampleFormControlInputHelpInline"
        />
        <CFormText component="span" id="formMessageLabel">
          Message must be less than 200 characters.
        </CFormText>
        <button id="submitBtn">Submit!</button>
      </CForm> */}
    </div>
  );
};

export default Contact;
