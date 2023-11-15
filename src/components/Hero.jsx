import React from 'react';
import styled from 'styled-components';
import Navbar_ from './Navbar';

const Section = styled.section`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
const Container = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    width: 100%;
    display: flex;
    justify-content: space-between;
    
`

const Left = styled.div`
    flex: 2;
    /* text-align: right; */
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    text-align: right;
`

const Right = styled.div`
    flex: 3;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`

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
        <Section>
            <Navbar_ />
            <Container>
                <Left>
                    <Title>Think. Make. Solve.</Title>
                    <WhatWeDo>
                        <Line src="./img/line.png"/>
                        <Subtitle>What we do</Subtitle>
                    </WhatWeDo>
                    <Description>we enjoy creating deligthful, human-centered digital experiences.</Description>
                    <Button>Learn more</Button>
                </Left>
                <Right>
                    <Astronaut src="./img/moon.png"></Astronaut>
                </Right>
            </Container>
        </Section>
    )
}

export default Hero