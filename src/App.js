import React from 'react'
import Cards from './components/Cards';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Header from './components/Header';
import Layout from './components/layouts/Layout';
import Modals from './components/Modals';
import Navigation from './components/Navigation';


function App() {
  return (
    <div class="App">
      <Layout>

        <Header />
        <Cards />
        <Carousel />
        <Modals />
      
      </Layout>
    </div>
  );
}

export default App;
