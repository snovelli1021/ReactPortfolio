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

export default function Projects() {
  return (
    <CRow xs={{ cols: 1 }} md={{ cols: 3 }} className="g-4">
      <CCol xs>
        <CCard className="h-100">
          <CCardImage orientation="top" src="/images/react.jpg" />
          <CCardBody>
            <CCardTitle>Card title</CCardTitle>
            <CCardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CCardText>
          </CCardBody>
          <CCardFooter>
            <small className="text-medium-emphasis">
              Last updated 3 mins ago
            </small>
          </CCardFooter>
        </CCard>
      </CCol>
      <CCol xs>
        <CCard className="h-100">
          <CCardImage orientation="top" src="/images/react.jpg" />
          <CCardBody>
            <CCardTitle>Card title</CCardTitle>
            <CCardText>
              This card has supporting text below as a natural lead-in to
              additional content.
            </CCardText>
          </CCardBody>
          <CCardFooter>
            <small className="text-medium-emphasis">
              Last updated 3 mins ago
            </small>
          </CCardFooter>
        </CCard>
      </CCol>
      <CCol xs>
        <CCard className="h-100">
          <CCardImage orientation="top" src="/images/react.jpg" />
          <CCardBody>
            <CCardTitle>Card title</CCardTitle>
            <CCardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </CCardText>
          </CCardBody>
          <CCardFooter>
            <small className="text-medium-emphasis">
              Last updated 3 mins ago
            </small>
          </CCardFooter>
        </CCard>
      </CCol>
      <CCol xs>
        <CCard className="h-100">
          <CCardImage orientation="top" src="/images/react.jpg" />
          <CCardBody>
            <CCardTitle>Card title</CCardTitle>
            <CCardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CCardText>
          </CCardBody>
          <CCardFooter>
            <small className="text-medium-emphasis">
              Last updated 3 mins ago
            </small>
          </CCardFooter>
        </CCard>
      </CCol>
      <CCol xs>
        <CCard className="h-100">
          <CCardImage orientation="top" src="/images/react.jpg" />
          <CCardBody>
            <CCardTitle>Card title</CCardTitle>
            <CCardText>
              This card has supporting text below as a natural lead-in to
              additional content.
            </CCardText>
          </CCardBody>
          <CCardFooter>
            <small className="text-medium-emphasis">
              Last updated 3 mins ago
            </small>
          </CCardFooter>
        </CCard>
      </CCol>
      <CCol xs>
        <CCard className="h-100">
          <CCardImage orientation="top" src="/images/react.jpg" />
          <CCardBody>
            <CCardTitle>Card title</CCardTitle>
            <CCardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </CCardText>
          </CCardBody>
          <CCardFooter>
            <small className="text-medium-emphasis">
              Last updated 3 mins ago
            </small>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  );
}
