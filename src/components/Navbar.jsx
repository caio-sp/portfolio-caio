import React from 'react'
import styled from 'styled-components'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.mim.css";

const Section = styled.nav`
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  width: 1440px;
`
const Left = styled.div`
  flex: 1;
  width: 100%;
`
const Right = styled.div`
  flex: 1;
`

const Logo = styled.img`
  width: 200px;
`


const Navbar = () => {
  return (
    <Nav>
      <Container>
        <Left>
          <Logo src="./img/logoCaio.png"/>
        </Left>
        <Right></Right>
      </Container>
    </Nav>
  )
}

export default Navbar