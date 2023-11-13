import Hero from './components/Hero'
// import Navbar_ from './components/Navbar'
import About from './components/About'
import Works from './components/Works'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import styled from 'styled-components'

// const Section = styled.section`
//     height: 100vh;
//     scroll-snap-align: center;
// `

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
      {/* <Section>
      <Navbar_ />
      </Section> */}
      <Hero />
      <About />
      <Works />
      <Timeline />
      <Contact />
      
    </Container>
  )
}

export default App
