import React, { Component } from 'react';
import CartWidjet from '../CartWidget/CartWidjet';

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <CartWidjet/>
    <a class="navbar-brand text-white" href="#">Speed Shop</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Pricing</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
            </div>
        );
    }
}

export default NavBar;