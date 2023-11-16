import React from 'react'
import styled from 'styled-components'


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
    align-items: center;
    flex-direction: column;
    justify-content: center;
    
`

const Timeline = () => {
  return (
    <Section>
    <Container>
      Timeline
    </Container>
  </Section>
  )
}

export default Timeline