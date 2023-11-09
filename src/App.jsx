import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Works from './components/Works'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  background-color: rebeccapurple;
`

function App() {

  return (
    <Container>
      <Navbar />
      <Hero />
      <About />
      <Works />
      <Timeline />
      <Contact />
    </Container>
  )
}

export default App
