import {  useState } from "react";
import axios from "axios";
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/css/Cadastro.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function Cadastro() {

  const [clientname, setClientname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function save(event) {
      event.preventDefault();
      try {
        await axios.post("http://localhost:8085/api/v1/client/save", {
        clentname: clientname,
        email: email,
        password: password,
        });
        alert("Cadastro criado com sucesso!");
      } catch (err) {
        alert(err);
      }
    }


  return (
    <div>
        <NavBar />
        <div className="cadastro-container d-flex justify-content-center align-items-center">
        <div className="cadastro-box">
        <h2>Cadastro</h2>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="nome" placeholder="Nome" 
            
            value={clientname}
            onChange={(event) => {
              setClientname(event.target.value);
            }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" 
            
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}

            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Senha" 
            
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={save} >
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
