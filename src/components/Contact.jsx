import React from 'react'
import styled from 'styled-components'
import { Row, Col, Button, Form} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
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
    text-align: left;
`
const Contact = () => {
  return (
    <Section>
      <Container>
        <Left><Map/></Left>
        <Right>
          <Form>
            <Row className="mb-3 w-100 px-4">

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Nome</Form.Label>
                <Form.Control placeholder="Digite seu nome" />
              </Form.Group>              

              <Form.Group as={Col} className="mb-3" controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Digite seu e-mail" />
              </Form.Group>

              <Form.Group as={Col} className="mb-3" controlId="formGridPassword">
                <Form.Label>Telefone</Form.Label>
                <Form.Control type="text" placeholder="(__) _____-____" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Mensagem</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Digite sua mensagem" />
              </Form.Group>
            </Row>

            <Button variant="primary" className='mx-4' type="submit">
              Enviar
            </Button>
          </Form>
        </Right>
      </Container>
    </Section>
  )
}

export default Contact