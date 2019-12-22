import React, { useState } from 'react';
import './App.css';
import Content from './layout/content';
import Footer from './components/footer';
import Header from './components/header';

function App() {

  return (
    <div className="App">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
