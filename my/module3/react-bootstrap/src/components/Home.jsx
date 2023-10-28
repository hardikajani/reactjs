import React from "react";
import { Container, Row, Card, Table } from "react-bootstrap";

function Home() {
  return (
    <div>
      <Container className="mt-5 p-2 bg-light">
        <Row>
          <div className="col-md-4 p-3">
            <Card>
              <div className="card-header ">
                <img className="card-img-top" src="https://images.pexels.com/photos/1042423/pexels-photo-1042423.jpeg?cs=srgb&dl=pexels-hoang-le-1042423.jpg&fm=jpg"/>
              </div>
              <div className="mt-2 card-body p-2">
                <p className="text-denger">Why You Should Cultivate a Fluid Sense of Self</p>
              </div>
              <div className=" p-3 card-footer">
              If you want to learn something about change there is no better place to look than evolution.
              </div>
            </Card>
          </div>
          
        </Row>
      </Container>
    </div>
  );
}

export default Home;
