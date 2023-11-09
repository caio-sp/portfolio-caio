import Hero from './components/Hero'
import About from './components/About'
import Works from './components/Works'
import Timeline from './components/Timeline'
import Works from './components/Works'
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  background-color: rebeccapurple;
`

function App() {

  return (
    <Container>
      <Hero />
      <About />
      <Works />
      <Timeline />
      <Contact />
    </Container>
  )
}

export default App
