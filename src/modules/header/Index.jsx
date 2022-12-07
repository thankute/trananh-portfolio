import { Col, Row } from 'antd'
import './styles.scss'

function Header() {
  return (
    <Col style={{ marginTop: '33px'}}>
      <Row justify="center"> 
        <Col className="title">
          I'm Tran Anh.
        </Col>
      </Row>
      <Row justify="center"> 
        <Col className="sub__title">Graphic Designer and Web Designer</Col>
      </Row>
    </Col>
  )
}

export default Header