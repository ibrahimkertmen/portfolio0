import React, { Component } from "react";
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              Bizimle iletişime geçin
            </p>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <h4>LinkedIn: {<a href={resumeData.linkedinId} target="_blank">www.linkedin.com/in/büşra-aykut-1611b3159</a>}</h4>
              <h4>Telefon: {resumeData.phoneNumber}</h4>
              <h4>E-Mail: {<a href={`mailto:${resumeData.Email}`}>{resumeData.Email}</a>}</h4>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}
