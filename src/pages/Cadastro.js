import React from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/css/Cadastro.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Cadastro = () => {
  return (
    <div>
        <NavBar />
        <div className="cadastro-container d-flex justify-content-center align-items-center">
        <div className="cadastro-box">
        <h2>Cadastro</h2>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="nome" placeholder="Nome" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Senha" />
          </Form.Group>

          <Button variant="primary" type="submit" href='/home'>
            Cadastrar
          </Button>
        </Form>
      </div>
      </div>
        <Footer />
    </div>
  );
};

export default Cadastro;
