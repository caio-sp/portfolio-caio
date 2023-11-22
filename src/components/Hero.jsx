import React from 'react';
import styled from 'styled-components';
import Navbar_ from './Navbar';
import { Container, Row, Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

const Section = styled.section`
    height: 100vh;
    scroll-snap-align: center;`

const Astronaut = styled.img`
    width: 500px;
    object-fit: contain;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: animate 2s infinite ease alternate;

    @keyframes animate {
        to{
            transform: translateY(20px);
        }
    }
`

const Title = styled.h1`
    color: white;
    font-size: 74px;
`
const Line = styled.img`
    height: 5px;
    gap: 15px;
    top: 5px;
`
const Subtitle = styled.h2`
    color: rebeccapurple;
`

const WhatWeDo = styled.div`
    display: flex;
    justify-content: right;

`
const Description = styled.p`
    color:white;
`
const Button = styled.button`
    background-color: rebeccapurple;
    color:white;
    padding: 10px;
    width: 200px;
    
    align-self: self-end;

`


const Hero = () => {
    return (
        <Section className="d-flex align-items-center justify-content-center">
            <Navbar_ />
            <Container fluid>
                <Row className='text-center'>
                    <Col className="col-12 col-md-6 position-relative">
                        <Title>Think. Make. Solve.</Title>
                        <WhatWeDo>
                            <Line src="./img/line.png"/>
                            <Subtitle>What we do</Subtitle>
                        </WhatWeDo>
                        <Description>we enjoy creating deligthful, human-centered digital experiences.</Description>
                        <Button>Learn more</Button>
                    </Col>
                    <Col className="col-12 col-md-6 position-relative">
                        <Astronaut src="./img/moon.png"></Astronaut>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

export default Hero