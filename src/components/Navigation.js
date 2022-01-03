import React from 'react'
import logo from '../assets/bootstrap-4.png'

function Navigation() {
    return (
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">

  <div class="container-fluid">

    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
    </button>


    <div class="collapse navbar-collapse" id="navbarSupportedContent">

      <a class="navbar-brand mt-2 mt-lg-0" href="#">
        <img
          src={logo}
          height="30"
        />
      </a>

      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#">Main</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>

    </div>




    <div class="d-flex align-items-center">
        <div class="container-fluid">
            <form class="d-flex input-group w-auto">
            <input
                type="search"
                class="form-control rounded"
                placeholder="Search"
            />
            <span class="input-group-text border-0" id="search-addon">
                <i class="fas fa-search"></i>
            </span>
            </form>
        </div>
    </div>

  </div>

</nav>

    )}

export default Navigation
