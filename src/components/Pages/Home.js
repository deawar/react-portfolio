import React from "react";
//import { BrowserRouter as Router, Route } from "react-router-dom";
import '../../../node_modules/materialize-css/dist/css/materialize.css';
import Parallax from '../Body/Parallax';
import Footer from '../Footer/Footer';

function Home() {
  return (
    <div>
      <Parallax />
      <Footer />
    </div>
  );
}

export default Home;
