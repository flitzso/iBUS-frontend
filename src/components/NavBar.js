import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/css/NavBar.css';

const NavBar = () => {
  return (
    <nav>
    <div class="collapse" id="navbarToggleExternalContent">
  <div class="bg-dark p-4">
    <div class="d-grid gap-2 d-md-block">
    <Link class="btnHomeNav btn btn-primary" type="button" to='/home'>Home</Link>
    </div>
  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
   <Link class="btnLC btn btn-primary me-md-2" type="button" to='/'>Login</Link>
   <Link class="btnLC btn btn-primary me-md-2" type="button" to='/cadastro'>Cadastro</Link>
 </div>
  </div>
</div>
<nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>
</nav>
  );
};

export default NavBar;
