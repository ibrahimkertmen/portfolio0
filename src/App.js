import React, { Component } from "react";
import Baslik from "./components/Baslik";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import resumeData from "./resumeData";
import { Switch, Route } from "react-router-dom";
import Homepage from "./containers/Homepage";
import Mecidiye from "./containers/Mecidiye";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Baslik />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/projeler/mecidiye" component={Mecidiye} />
        </Switch>
        <ContactUs resumeData={resumeData} />
        <Footer resumeData={resumeData} />
      </div>
    );
  }
}
export default App;

////////////

/*

import React, { Component } from "react";
import Baslik from "./components/Baslik";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import resumeData from "./resumeData";
import Test from "./components/Test";
import {Switch, Route} from "react-router-dom";
import Homepage from "./containers/Homepage";
import Mecidiye from "./containers/Mecidiye";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Baslik />
        <Switch >
          
          
          
          <Route path="/projeler/mecidiye" component={Mecidiye} />
        </Switch>   
        <Header resumeData={resumeData} />    
        <About resumeData={resumeData} />
        <Portfolio resumeData={resumeData} />     
        <Test />
        <Testimonials resumeData={resumeData} /> 
                      
        <ContactUs resumeData={resumeData} />      
        <Footer resumeData={resumeData} />
        
      </div>
    );
  }
}
export default App;


*/
