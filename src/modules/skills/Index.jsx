import { Col, Progress, Row } from 'antd';
import React from 'react';
import './styles.scss';

function Skills() {
  return (
     <Col className='skills content'>
     
      <Row>
        <div className="heading">My Skills</div>
      </Row>

      <Row style={{ marginTop: 20}}>
        <p className='title'>Web Design</p>
        <Progress strokeLinecap="butt" percent={80} showInfo={false} trailColor='#E9FFEB'/>
      </Row>
      <Row style={{ marginTop: 20}}>
        <p className='title'>Graphic Design</p>
        <Progress strokeLinecap="butt" percent={90} showInfo={false} trailColor='#E9FFEB'/>
      </Row>
      <Row style={{ marginTop: 20}}>
        <p className='title'>Photography</p>
        <Progress strokeLinecap="butt" percent={75} showInfo={false}trailColor='#E9FFEB'/>
      </Row>
     
      <Row style={{ marginTop: 30, backgroundColor: '#E7FFE9', padding: '15px 0'}} align='middle' justify='center'>
        <Col span={6}>
        <Row  align='middle' justify='center'>
          <div className="custom">
            <span>10+</span>
            <span>Partners</span>
          </div>
        
        </Row>
        
        </Col>
        <Col span={6}>
        <Row  align='middle' justify='center'>
           <div className="custom">
             <span>20+</span>
            <span>Projects Done</span>
           </div>
        </Row>
        
        </Col>
        <Col span={6}>
        <Row  align='middle' justify='center'>
          <div className="custom">
            <span>90+</span>
            <span> Happy Clients</span>
          </div>
        </Row>
        
        </Col>
        <Col span={6}>
        <Row  align='middle' justify='center'>
           <div className="custom">
             <span>130+</span>
            <span>Meetings</span>
          </div>
        </Row>
        
        </Col>
      </Row>

      <Row style={{ marginTop: 30}}>
          <button className='download'> 
            <img src={'assets/imgs/download.png'}/>
            Download Resume
          </button>
      </Row>


    </Col>
  )
}

export default Skills