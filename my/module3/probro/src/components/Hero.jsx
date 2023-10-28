import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Header from '../assets/header.avif'
import Header from '../assets/header.png'


function Hero() {
  return (
    <div className='w-100'>
      <Container fluid>
      <Row>
        <Col lg={5} md={5} sm={12} className='p-5'>
          <h1>Invest in your point of view</h1>
          <p className='fs-4'>Sports, Entertainment, Economy or Finance.</p>
          <button className='btn bg-white'>Download App</button>
          <button className="btn text-dark ms-5" style={{ backgroundColor: "#AACCFF" }}>Trade Online</button>
        </Col>
        <Col lg={7} md={7} sm={12} className='mt-5 p-3'>
          <img src={Header} alt='header' className='w-100' />
        </Col>
      </Row>
      </Container>
    </div>
  )
}

export default Hero