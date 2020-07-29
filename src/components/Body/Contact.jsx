import React from 'react'
import "materialize-css/dist/css/materialize.min.css";
import { Slider, Slide, Caption } from 'react-materialize';


function  Contact() {
  return (
    <>
        <Slider
  fullscreen={false}
  options={{
    duration: 500,
    height: 400,
    indicators: true,
    interval: 6000
  }}
>
  <Slide image={<img alt="" src="http://lorempixel.com/780/580/nature/1"/>}>
    <Caption placement="center">
      <h3>
        Please <a className="white-text" href="mailTo:deawar@gmail.com">Email</a> Dean!
      </h3>
      <h5 className="light grey-text text-lighten-3">
        Hope you have a Great Day!
      </h5>
    </Caption>
  </Slide>
  <Slide image={<img alt="" src="http://lorempixel.com/780/580/nature/2"/>}>
    <Caption placement="left">
      <h3>
        If you need assistance with Technology Call Us!
      </h3>
      <h5 className="light grey-text text-lighten-3">
        Our <a className="white-text" href="tel: +1-706-521-4154">Phone: 706-521-4154</a>.
      </h5>
    </Caption>
  </Slide>
  <Slide image={<img alt="" src="https://lorempixel.com/780/580/nature/3"/>}>
    <Caption placement="right">
      <h3>
        We make technology accessable and easy for everyone.
      </h3>
      <h5 className="light grey-text text-lighten-3">
        Making technology work for you!
      </h5>
    </Caption>
  </Slide>
  <Slide image={<img alt="" src="https://lorempixel.com/580/250/nature/4"/>}>
    <Caption placement="center">
      <h3>
        Check our Website out at <a className="brown-text text-lighten-3" href="http://www.ssccbogart.info">www.ssccbogart.info</a>
      </h3>
      <h5 className="light grey-text text-lighten-3">
        Be safe and we will see you soon.
      </h5>
    </Caption>
  </Slide>
</Slider>
        
    </>
  );
}

export default Contact;