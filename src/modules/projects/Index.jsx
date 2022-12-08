import { Col, Image, Row } from 'antd';
import React from 'react';
import './styles.scss';

function Projects() {

  return (
     <Col className='projects content'>
     
      <Row>
        <div className="heading">My Projects</div>
      </Row>

      <Row gutter={6}>
        <Col span={8} className='img1'>
          <Image src={'assets/imgs/pan1.png'} preview={{ maskClassName: 'LOGO'}}/> 
        </Col>
        <Col span={16} className='img2'>
          <Image src='assets/imgs/RONGXANH1.png'/>
        </Col>
      </Row>
    
      <Row gutter={6} style={{ marginTop: 20}}>
        <Col span={12} className='img3'>
          <Image src={'assets/imgs/imag1.png'}/>
        </Col>
        <Col span={12}>
          <Row className='img4'>
          <Image src={'assets/imgs/image3.png'}/>
          </Row>
          <Row style={{marginTop: 20}} className='img5'>
          <Image src={'assets/imgs/logoooooororoo1.png'}/>
          </Row>
        </Col>
      </Row>

      <Row justify='center'>
          <p className='show-more'>SHOW MORE</p>
      </Row>

    </Col>
  )
}

export default Projects