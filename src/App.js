import React from 'react'
import Cards from './components/Cards';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Header from './components/Header';
import Modals from './components/Modals';
import Navigation from './components/Navigation';


function App() {
  return (
    <div class="App">
      <Navigation />
      <Header />
      <Cards />
      <Carousel />
      <Modals />
      <Footer />
    </div>
  );
}

export default App;
