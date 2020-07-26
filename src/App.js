import React from 'react';
import './App.css';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import Parallax from "./components/Body/Parallax";
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
    <div className="App">
      <Parallax />
      <Footer />  
    </div>
    </>
  );
}

export default App;
