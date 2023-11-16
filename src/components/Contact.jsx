import React from 'react'
import styled from 'styled-components'
import Map from './Map'


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
    text-align: center;
`

const Right = styled.div`
    flex: 2;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    text-align: center;
`
const Contact = () => {
  return (
    <Section>
      <Container>
        <Left>Contact- Left </Left>
        <Right><Map/></Right>
      </Container>
    </Section>
  )
}

export default Contact