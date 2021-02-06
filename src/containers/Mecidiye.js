import React, { Component } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";


export default class Test extends Component {
  render() {
      
    const slider = (
      <AwesomeSlider
        style={{
          height: "600px",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            backgroundImage: "url(/images/portfolio/interior7.jpg)",
            backgroundSize: "contain",
            backgroundPosition: "center",
            //height: "300px",
            backgroundRepeat: "no-repeat",
          }}
        >
          1
        </div>
        <div
          style={{
            backgroundColor: "white",
            backgroundImage: "url(/images/portfolio/interior8.jpg)",
            backgroundSize: "contain",
            backgroundPosition: "center",
            //height: "300px",
            backgroundRepeat: "no-repeat",
          }}
        >
          1
        </div>
        <div
          style={{
            backgroundColor: "white",
            backgroundImage: "url(/images/portfolio/interior9.jpg)",
            backgroundSize: "contain",
            backgroundPosition: "center",
            //height: "300px",
            backgroundRepeat: "no-repeat",
          }}
        >
          1
        </div>
        <div
          style={{
            backgroundColor: "white",
            backgroundImage: "url(/images/portfolio/interior10.jpg)",
            backgroundSize: "contain",
            backgroundPosition: "center",
            //height: "300px",
            backgroundRepeat: "no-repeat",
          }}
        >
          1
        </div>
        
      </AwesomeSlider>
    );
    return <div>{slider}</div>;
  }
}
