import React from 'react';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';

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
