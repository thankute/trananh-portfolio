import { Col, Divider, Row } from 'antd';
import React from 'react';
import './styles.scss';

function About() {
  return (
    <Col className='about content'>
      <Row justify='center'>
        <div style={{ position: 'relative'}}>
          <img src={'assets/imgs/ava.png'} className='avatar' />
        <div className="box-1 box "></div>
        <div className=" box-2 box"></div>
        </div>
      </Row>

      <Row>
        <div className="heading">About me</div>
      </Row>
      <Divider />

      <Row>
        <p style={{ fontSize: 16, color: '#4a4a4a'}}>
          I am Tran Anh and i’m a creative, artistic Graphic Designer with a talent for thinking outside the box and delivering cutting edge ideas and designs.
           I graduated valedictorian in Graphic Design from Seem1 ARENA MULTIMEIDA and then I have been working in design for the past 6 month. 
           I take pride in delivering outstanding products to all stakeholders and see the positive impact I make on customers and businesses. 
        </p>
      </Row>
      
    </Col>
  )
}

export default About