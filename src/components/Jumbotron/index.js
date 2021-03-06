import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 250, clear: "both", textAlign: "center" }}
      className="jumbotron"
    >
      {/* {children} */}
      <div className="view overlay my-4">
        <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg" className="img-fluid" alt="Coastal scene"/>
        <a href="/">
        <div className="mask rgba-white-slight"></div>
        </a>
      </div>
    </div>
  );
}

export default Jumbotron;
