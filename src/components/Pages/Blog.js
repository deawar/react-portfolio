import React from "react";
import Nav from '../Nav';
import Footer from '../Footer/Footer';
import HorCards from '../Body/HorCards';


function Blog() {
  return (
    <>
    <Nav />
    <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg" class="responsive-img" alt="Coastal Scene"/>
    {/* <Jumbotron /> */}
      <h1>Dean's Notes and Discoveries Page</h1>
      <HorCards />
    <Footer />
    </>
  );
}

export default Blog;
