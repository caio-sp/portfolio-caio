import Hero from './components/Hero'
// import Navbar from './components/Navbar'
import About from './components/About'
import Works from './components/Works'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  color: white;
  background: url("./img/bg.jpeg");
  scrollbar-width: none;
  &::-webkit-scrollbar{
    display: none;
  }
`

function App() {

  return (
    <Container>
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Works />
      <Timeline />
      <Contact />
    </Container>
  )
}

export default App
