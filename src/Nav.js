import React from 'react'

const Nav = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src="logo.jpeg" alt="logo" height="70px" width="100px"/>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse  mx-5 mt-3" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Doner Programme</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Fertility preservation</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Advanced Treatment</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Interfity Treatments</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">IVF Testing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><button type="button" class="btn btn-danger">Talk to us</button></a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>

    </div>
    
  )
}

export default Nav;