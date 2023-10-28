import React from 'react'
import { Chart } from "react-google-charts";
import { Container, Row } from 'react-bootstrap'

export const data = [
  ["Task", "Hours per Day"],
  ["Portfolio", 45],
  ["Clients", 36],
  ["Contacts", 40],
  ["Reviews", 24],
];

export const options = {
  title: "Data Activities",
  is3D: true,
};

export default function Home() {
  return (
    <div>
      <Container>
        <Row>
          <div className='col-3 bg-white text-black mx-auto p-4 '>
          <h5 className='text-center mt-2'>Portfolio <span className='text-white bg-danger rounded-pill p-1'>50</span></h5>
          
          </div>
          <div className='col-2 bg-secondary mx-auto p-4'>
          <h5 className='text-center mt-2'>Clients <span className='text-white bg-danger rounded-pill p-1'>50</span></h5>
          </div>
          <div className='col-3 bg-white text-black mx-auto p-4'>
          <h5 className='text-center mt-2'>Contacts <span className='text-white bg-danger rounded-pill p-1'>50</span></h5>
          </div> 
          <div className='col-2 bg-secondary mx-auto p-4'>
          <h5 className='text-center mt-2'>Reviews <span className='text-white bg-danger rounded-pill p-1'>50</span></h5>

          </div>          
        </Row>
        <Row className='mt-4'>
          <div className='col-md-12'>
          <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"400px"}
          />  
          </div>     
        </Row>
        
      </Container>
    </div>
  )
}
