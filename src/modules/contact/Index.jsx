import { Col, Divider, Form, Input, Row, Spin } from 'antd';
import React from 'react';
import './styles.scss';

function Contact() {
  return (
    <Col className='contact content'>
      <Row justify='center'>
        
      </Row>

      <Row>
        <div className="heading">Contact me</div>
      </Row>
      <Divider />

      <Col>
          <Row>
            <p className='address address-1'>
              <img src='./src/assets/imgs/Group.png'/>
            
            110 Tran Phu, Ha Dong

            </p>
          </Row>
          <Row>
             <p className='address address-2'>
              <img src='./src/assets/imgs/Group1.png'/>
              
            +84 867 439 662
            </p>
            </Row>
          <Row>
              
             <p className='address address-3'>
              <img src='./src/assets/imgs/Group2.png'/>
              loclinht@gmail.com
            </p>
          </Row>
      </Col>
      
      <Row>
        <p style={{ marginTop: 20 , fontSize: 18 , color: '#4a4a4a'}}>
          Let’s get in touch. Send me a message:
        </p>
      </Row>

      <Col>
        <Form>
            <Form.Item
                name="name"
                rules={[
                    { required: true, message: "Please enter your name!" }
                ]}
            >
              <Input placeholder='NAME'/>
            </Form.Item>
            <Form.Item
                name="email"
                rules={[
                    { required: true, message: "Please enter your email!" }
                ]}
            >
              <Input placeholder='EMAIL'/>

            </Form.Item>
            <Form.Item
                name="subject"
                rules={[
                    { required: true, message: "Please enter your subject!" }
                ]}
            >
              <Input placeholder='SUBJECT'/>

            </Form.Item>
            <Form.Item
                name="message"
                rules={[
                    { required: true, message: "Please enter your message!" }
                ]}
            >
              <Input placeholder='MESSAGE'/>

            </Form.Item>

            <Row>
              <button type='submit' className='btn'>
                <img src='./src/assets/imgs/send.png'/>
                SEND MESSAGE
              </button>
            </Row>
        </Form>
      </Col>
      <Row style={{marginTop: 40}}>
        <a href="https://www.facebook.com/llt.229" target='_blank'>
          <img src='./src/assets/imgs/Vector.png' className='social-media'/>
        </a>
        <img src='./src/assets/imgs/ins.png' className='social-media'/>
        <img src='./src/assets/imgs/Twitter.png' className='social-media'/>
          
      </Row>
    </Col>
  )
}

export default Contact