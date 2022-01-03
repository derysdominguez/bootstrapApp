import React from 'react'
import './carousel.css'

import img1 from '../assets/image1.jpg'
import img2 from '../assets/image2.jpg'
import img3 from '../assets/image3.jpg'

function Carousel() {
    return (

<div id="demo" class="carousel slide carousel-dark" data-ride="carousel">
  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img1} alt="Los Angeles" width="1100" height="500" />
      <div class="carousel-caption">
        <h3>First Part</h3>
        <p>This is the first part of the carousel</p>
      </div>   
    </div>
    <div class="carousel-item">
      <img src={img2} alt="Chicago" width="1100" height="500" />
      <div class="carousel-caption ">
        <h3>Second Part</h3>
        <p>This is the second part of the carousel</p>
      </div>   
    </div>
    <div class="carousel-item">
      <img src={img3} alt="New York" width="1100" height="500" />
      <div class="carousel-caption">
        <h3>Third Part</h3>
        <p>This is the third part of the carousel</p>
      </div>   
    </div>
  </div>
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
</div>
    )
}

export default Carousel
