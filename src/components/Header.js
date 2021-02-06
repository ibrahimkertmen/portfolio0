import React, { Component } from "react";
//import Baslik from "./Baslik";

export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
        
      <React.Fragment>
        <header id="home">
          
          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">{resumeData.logo}</h1>
              <h1 className="responsive-headline">{resumeData.name}</h1>

              <hr />
              
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle"></i>
            </a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}
