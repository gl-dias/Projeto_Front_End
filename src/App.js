import React from 'react';
import Menu from './components/menu/Menu';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Menu/>
      <div className="content"></div>
      <Footer/>
    </div>
  );
}

export default App;
