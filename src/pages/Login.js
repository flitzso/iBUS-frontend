import React from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/css/Login.css';

const Login = () => {
  return (
    <div className="login-container d-flex justify-content-center align-items-center">
      <div className="social-login-box">
        <h2 className="mb-5">Login outros</h2>
        <Button variant="primary" className="facebookBus mb-4" href='https://www.facebook.com/'>
          Facebook
        </Button>
        <Button className="twitterBus mb-4" variant="info" href='https://twitter.com/home'>Twitter</Button>
      </div>

      <div className="login-box">
        <h2>Login</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Senha" />
          </Form.Group>

          <Button variant="primary" type="submit" href='/home'>
            Login
          </Button>
        </Form>
      </div>

      <div className="background-image">
        {/* Adicione uma imagem de ônibus como plano de fundo */}
      </div>
    </div>
  );
};

export default Login;
