import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo2 from "../assets/ProbroLogo.png";

function Nevbar() {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="border-bottom border-1"
        style={{ backgroundColor: "#222233" }}
      >
        <Container fluid className="ms-3 me-3">
          <Navbar.Brand href="#home">
            <img src={Logo2} alt="logo" width="200px" height="50px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="text-white" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ms-1">
              <Nav.Link href="#" className="fw-bold fs-5" style={{ color: "#AACCFF" }}>Trade</Nav.Link>
              <Nav.Link href="#" className="fw-bold fs-5" style={{ color: "#AACCFF" }}>Read</Nav.Link>
              <Nav.Link href="#" className="fw-bold fs-5" style={{ color: "#AACCFF" }}>Probo Cares</Nav.Link>
              <Nav.Link href="#" className="fw-bold fs-5" style={{ color: "#AACCFF" }}>Careers</Nav.Link>
            </Nav>
            <Nav>
                {/* <p>For 18 years and above only</p> */}
              <Nav.Link href="#">
                <button className="btn bg-white">Download App</button>
              </Nav.Link>
              <Nav.Link eventKey={2} href="#">
                <button className="btn text-dark" style={{ backgroundColor: "#AACCFF" }}>Trade Online</button>
              </Nav.Link>
              <Nav.Link eventKey={2} href="#">
                <button className="btn text-dark" style={{ backgroundColor: "#AACCFF" }}>Account</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Nevbar;
