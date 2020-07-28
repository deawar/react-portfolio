import React from "react";
import Nav from '../Nav';
import Footer from '../Footer/Footer';
import HorCards from '../Body/HorCards';
// import Jumbotron from "../Jumbotron";



function Blog() {
  return (
    <>
    <Nav />
    <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg" className="responsive-img" alt="Coastal Scene"/>
      <h1>Dean's Notes and Discoveries Page</h1>
      {/* <Jumbotron/> */}

      <HorCards />
    <Footer />
    </>
  );
}

export default Blog;
