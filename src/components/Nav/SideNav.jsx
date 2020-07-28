import React, { Component } from 'react';
import { SideNavItem, Icon } from 'react-materialize';
//import './SideNav.css';
import M from 'materialize-css';
// const trigger = <Button> Open SideNav</Button>;
// export  () => (
//     <SideNav header="SideNav Header" trigger={trigger}></SideNav>
// );

class SideNavMenu extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render () {

    return (
      <div>
        <style>
          {`#root > div > div {z-index: 99999 !important;}`}
        </style>
        <SideNavMenu id="SideNav-10" options={{draggable: true}}>
          {/* <SideNavItem
            user={{
              background: 'https://placeimg.com/640/480/tech',
              email: 'deawar@gmail.com',
              image: 'static/media/react-materialize-logo.824c6ea3.svg',
              name: 'Dean Warren',
            }}
            userView
          /> */}
          {/* <Button href="#about" icon={<Icon>cloud</Icon>}>
              <a href="#about" className="nav-link">About</a>
          </Button> */}
          
          {/* <SideNavItem href="#portfolio" icon={<Icon>collections</Icon>}>
          <a href="#portfolio" className="nav-link">Portfolio</a>
          </SideNavItem>
          
          <SideNavItem href="#contact" icon={<Icon>contact_mail</Icon>}>
          <a href="#footer" className="nav-link">Contact</a>
          </SideNavItem> */}
        </SideNavMenu>
      </div>
    );
}
}

export default SideNavMenu;
