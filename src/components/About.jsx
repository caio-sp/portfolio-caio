import React from 'react'
import styled from 'styled-components'
import {Row, Col, Container, Stack} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";


const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
`

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 20px;
  width: fit-content;
  
`

const ListItem = styled.li`
  font-size: 80px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  &:after{
    content: "Skill - 1";
    position: absolute;
    left: 0;
    color: pink;
    overflow: hidden;
    width: 0px;
    white-space: nowrap;
  }

  &:hover{
    &:after{
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to{
          width:100%;
        }
      }
    }
  }
`

const About = () => {
  return (
    <Section className="d-flex align-items-center justify-content-center">
      <Container fluid>
        <Row className='text-center align-items-center'>
          <Col className="col-12 col-md-6">
            <Stack gap={0}>
              <List>
                <ListItem>Skill - 1</ListItem>
                <ListItem>Skill - 2</ListItem>
                <ListItem>Skill - 3</ListItem>
                <ListItem>Skill - 4</ListItem>
              </List>
            </Stack>
          </Col>
          <Col className="col-12 col-md-6">About - Lado Direito</Col>
        </Row>
      </Container>
    </Section>
  )
}

export default About