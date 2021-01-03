import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import testImg from '../../assets/image/news1.jpg';

function GaleryPage() {
  return (
    <Container>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row>
        <div>привет</div>
      </Row>

      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
      <Row>
        <Col xs={4} md={4}>
          <img width="350px" height="300px" src={testImg} alt="" />
        </Col>
        <Col xs={4} md={4}>
          <img width="350px" height="300px" src={testImg} alt="" />
        </Col>
        <Col xs={4} md={4}>
          <img width="350px" height="300px" src={testImg} alt="" />
        </Col>
      </Row>

      {/* Columns are always 50% wide, on mobile and desktop */}
      <Row>
        {/* <Col xs={6}>
          <img width="350px" height="300px" src={testImg} alt="" />
        </Col>
        <Col xs={6}>
          <img width="350px" height="300px" src={testImg} alt="" />
        </Col> */}
      </Row>
    </Container>
  );
}

export default GaleryPage;
