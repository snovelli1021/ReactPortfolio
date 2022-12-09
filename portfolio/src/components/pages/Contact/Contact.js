import React from "react";
import { CForm, CFormLabel, CFormInput, CFormText } from "@coreui/react";
import "./Contact.css";

//Write function to submit form.
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
          maxLength={200}
        />
        <CFormText component="span" id="formMessageLabel">
          Message must be less than 200 characters.
        </CFormText>
        <button id="submitBtn">Submit!</button>
      </CForm>
    </div>
  );
};

export default Contact;
