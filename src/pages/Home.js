import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../components/css/Home.css';
import homeBackground from '../components/imgs/home_background.jpg'; // Importe a imagem

const Home = () => {
  return (
    <div>
      <NavBar />
      <Container className="my-0"> 
      <img src={homeBackground} class="backgroundHome"></img>
        <Row className="rowHome text-white p-4 rounded">
          <Col className="mr-3">
            <Form.Control type="text" placeholder="From" className="mb-2" />
          </Col>
          <Col className="mr-3">
            <Form.Control type="text" placeholder="To" className="mb-2" />
          </Col>
          <Col className="mr-3">
            <Form.Control type="date" className="mb-2" />
          </Col>
          <Col className="mr-3">
            <Form.Control type="date" className="mb-2" />
          </Col>
          <Col>
            <Button variant="primary" className="mb-2" href='/acentos'>
              Search Bus
            </Button>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
