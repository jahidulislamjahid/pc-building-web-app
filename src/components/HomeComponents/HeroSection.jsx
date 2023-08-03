import { Carousel, Col, Row } from 'antd'
import React from 'react'


const contentStyle2 = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#ffe8a1',
};
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#ea8e24',
};

const HeroSection = () => {
  return (
    <div className='container'>
      <Row gutter={16}>
        <Col span={6} push={18}>
          <div>
            <h3 style={contentStyle2}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle2}>1</h3>
          </div>

        </Col>
        <Col span={18} pull={6}>
          <Carousel autoplay dots={false}>
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel>
        </Col>
      </Row>
      <h1 style={{ textAlign: "center", width: "full", backgroundColor: "gray", }}>This is the hero section of the Homepage</h1>
    </div>
  )
}

export default HeroSection
