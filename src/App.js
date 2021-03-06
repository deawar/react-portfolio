import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
//import Parallax from "./components/Body/Parallax";
//import Footer from './components/Footer/Footer';

//import NavTabs from "./components/Nav/NavTabs";
import Home from "./components/Pages/Home";
import AboutPage from "./components/Pages/AboutPage";
import Blog from "./components/Pages/Blog";
import PortfolioPage from "./components/Pages/PortfolioPage"
import ContactPage from "./components/Pages/ContactPage";


function App() {
  return (
    <>
     <Router>
  
      <div className="App">          
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/portfolio" component={PortfolioPage} />
          <Route exact path="*" component={Home} />
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
