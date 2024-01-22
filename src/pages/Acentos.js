import React, { useState } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Acentos = () => {
  const [selectedAcento, setSelectedAcento] = useState(null);

  const handleAcentoClick = (acento) => {
    setSelectedAcento(acento);
  };

  const renderAcentos = () => {
    const acentos = [];
    // Supondo que a numeração dos assentos seja de 1 a 42
    for (let i = 1; i <= 42; i++) {
      acentos.push(
        <Button
          key={i}
          variant={selectedAcento === i ? 'success' : 'outline-primary'}
          onClick={() => handleAcentoClick(i)}
          className="mx-2 my-2"
        >
          {i}
        </Button>
      );
    }
    return acentos;
  };

  return (
    <div>
      <NavBar />
      <Container className="my-5">
        <h2>Escolha seu Assento</h2>
        <Row className="justify-content-center">
          <Col>
            <div className="d-flex flex-wrap">{renderAcentos()}</div>
          </Col>
        </Row>
        {selectedAcento && (
          <div className="mt-3">
            <p>Assento Selecionado: {selectedAcento}</p>
          </div>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default Acentos;
