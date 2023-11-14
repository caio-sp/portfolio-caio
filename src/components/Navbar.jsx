import React from 'react'
import styled from 'styled-components'
import {  Nav, Offcanvas, Container, Navbar } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";


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


const Navbar_ = () => {
  return (
   <>
    {[false].map((expand) => (
      <Navbar key={expand} expand={expand} className="bg-dark mb-3">
        <Container fluid>
          <Navbar.Brand href="#">
            <Logo src="./img/logoCaio.png" className="d-inline-block align-top px-2"  />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
              </Nav>
              
                
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    ))}
      </>
    )
}

export default Navbar_