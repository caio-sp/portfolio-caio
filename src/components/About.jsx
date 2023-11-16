import React from 'react'
import styled from 'styled-components'
import {Row, Col, Container, Stack} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";


const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
`

const About = () => {
  return (
    <Section className="d-flex align-items-center justify-content-center">
      <Container fluid>
        <Row className='text-center align-items-center'>
          <Col className="col-12 col-md-6">
            <Stack gap={3}>
              <div className="p-2">Item 1</div>
              <div className="p-2">Item 2</div>
              <div className="p-2">Item 3</div>
              <div className="p-2">Item 4</div>
            </Stack>
          </Col>
          <Col className="col-12 col-md-6">About - Lado Direito</Col>
        </Row>
      </Container>
    </Section>
  )
}

export default About