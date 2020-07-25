import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import Parallax from "./components/Body/Parallax";
import Footer from './components/Footer/Footer';
//import NavBarMenu from './components/Nav/NavBarMenu';


function App() {
  return (
    <>
    <Nav />
    <div className="App">
      <Parallax />
      <header className="App-header">
      <Footer />  
      <Nav />
      </header>
    </div>
    </>
  );
}

export default App;
