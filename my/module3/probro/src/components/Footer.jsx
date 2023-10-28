import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo2 from "../assets/ProbroLogo.png";
import FooterLink from "./FooterLink";

function Footer() {
  
  return (
    <div className='w-100 mt-1'>
      <Navbar
        className="border-top border-1"
        style={{ backgroundColor: "#222233" }}
      >
        <Container fluid className="ms-3 me-3">
          <Navbar.Brand>
            <img src={Logo2} alt="logo" width="200px" height="50px" />
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="#">
            <button className='btn bg-white'>Download App</button>
          
            </Nav.Link>
            <Nav.Link eventKey={2} href="#">
            <button className="btn text-dark ms-5" style={{ backgroundColor: "#AACCFF" }}>Trade Online</button>

            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div>
        <FooterLink/>
      </div>
      
    </div>
  );
}

export default Footer;
