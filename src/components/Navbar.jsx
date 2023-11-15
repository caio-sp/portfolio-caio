import React from 'react'
import styled from 'styled-components'
import {  Nav, Offcanvas, Container, Navbar } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";


const List = styled.ul`
  display: flex;
  gap:20px;
  list-style: none;
`
const ListItem = styled.li`
  font-size: medium;
  cursor: pointer;
`

const Logo = styled.img`
  width: 200px;
`




const Navbar_ = () => {
  return (
   <>
    {[false].map((expand) => (
      <Navbar  key={expand}  data-bs-theme="dark" expand={expand} fixed="top" className=" mb-3">
        <Container fluid>
          <Navbar.Brand href="#">
            <Logo src="./img/logo.png" className="d-inline-block align-top ps-5"  />
          </Navbar.Brand>
          {/* <List>
            <ListItem>Home</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Timeline</ListItem>
            <ListItem>Contact</ListItem>
          </List> */}
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='me-4' />
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