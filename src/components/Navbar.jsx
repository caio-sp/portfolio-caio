import React from 'react'
import styled from 'styled-components'

const Section = styled.nav`
  display: flex;
  justify-content: center;
`

const Container = styled.div`

`

const Navbar = () => {
  return (
    <Section>
      <Container>Navbar</Container>
    </Section>
  )
}

export default Navbar