import React from 'react';
import styled from 'styled-components';
import Navbar_ from './Navbar';

const Section = styled.section`
    height: 100vh;
    scroll-snap-align: center;
`

const Hero = () => {
    return (
        <Section>
            <Navbar_ />
        </Section>
    )
}

export default Hero