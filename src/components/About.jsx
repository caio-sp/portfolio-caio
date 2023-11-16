import React from 'react'
import styled from 'styled-components'
import {Row, Col, Container} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";


const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
`

const About = () => {
  return (
    <Section className="d-flex align-items-center justify-content-center">
      <Container fluid>
        <Row className='text-center'>
          <Col className="col-12 col-md-6">About 1</Col>
          <Col className="col-12 col-md-6">About 2</Col>
        </Row>
      </Container>
    </Section>
  )
}

export default About