import { Button, Col, Row } from 'antd'
import './App.css'
import About from './modules/about/Index'
import Contact from './modules/contact/Index'
import Header from './modules/header/Index'
import Projects from './modules/projects/Index'
import Skills from './modules/skills/Index'

function App() {

  return ( 
    <>
        <Row style={{ height: '100%', margin: '0 7%'}}>
          <Col span={24}>
            <Header />

            <About />

            <Skills />

            <Projects />

            <Contact />
          </Col>
        </Row>
    </>
  )
}

export default App
