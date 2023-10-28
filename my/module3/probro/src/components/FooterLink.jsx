import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FooterLink() {
  return (
    <Container fluid className="ms-3 me-3">
      <Row className="mt-4">
        <Col lg={3} md={6} sm={12}>
          <p className="fw-bold">Company</p>
          <p className="fw-normal">About Us</p>
          <p className="fw-normal">Culture</p>
          <p className="fw-normal">Team</p>
        </Col>
        <Col lg={3} md={6} sm={12}>
          <p className="fw-bold">Resources</p>
          <p className="fw-normal">Help Centre</p>
          <p className="fw-normal">Contact Support</p>
        </Col>
        <Col lg={3} md={6} sm={12}>
          <p className="fw-bold">Careers</p>
          <p className="fw-normal">Open Roles</p>
          <p className="fw-normal">Team</p>
        </Col>
        <Col lg={3} md={6} sm={12}>
          <p className="fw-bold">Contact Us</p>
          <p className="fw-normal">Registered Office: 7th Floor, IndiQube Vatika Towers, Tower B, Sector 54, Gurugram, Haryana 122003</p>
          <p className="fw-normal">communication@probo.in</p>
          <p className="fw-normal">help@probo.in</p>
        </Col>
      </Row>
    </Container>
  );
}

export default FooterLink;
