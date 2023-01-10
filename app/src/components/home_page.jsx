import React, { Component} from "react";
import $ from "jquery";


class Homepage extends Component {  
  
  state = {
  };

  render() {
  
    return (
      <div className="argos-landing-page-v1">
        
        <img className="rectangle-icon3" alt=""/>
        <img className="ebola-image-icon3" alt="" src="/imglib/ebola-image@2x.png"/>
        <div className="white-bubble-div3"></div>
        <div className="welcome-to-argos3">Welcome to ARGOS</div>
        <div className="the-regulatory-grade-database6">
          <p className="the-regulatory-grade-database7">
            The Regulatory-Grade Database for Infectious Disease Detection
          </p>
        </div>

        <div className="group-div3">
          <div className="header-div3"></div>
          <div className="about-div2">
            <a href="https://www.fda.gov/emergency-preparedness-and-response/mcm-regulatory-science/expanding-next-generation-sequencing-tools-support-pandemic-preparedness-and-response"
            target="_blank"> ABOUT</a>
          </div>
          <div className="data-div2">
            <a href="https://data.argosdb.org" >DATA</a>
          </div>
          <div className="argos-div3">ARGOS</div>
          <div className="github-div2">
            <a className="github-a" href="https://github.com/FDA-ARGOS" target="_blank">GITHUB</a
        >
          </div>
        </div>


        <div className="footer-div3"><div className="rectangle-div6"></div></div>
        <div className="contact-us-div3">CONTACT US</div>
        <img className="icoutline-email-icon3" alt="" />
        <div className="rectangle-div7"></div>
        <img className="rectangle-icon4" alt="" />
        <div className="footer-div4"><div className="rectangle-div6"></div></div>
        <div className="contact-us-div4">CONTACT US</div>
        <img className="icoutline-email-icon4" alt="" src="/imglib/icoutlineemail.svg"/>
        <img className="unnamed-2-icon6" alt="" src="/imglib/unnamed2@2x.png" />
        <img className="unnamed-1-icon3" alt="" src="/imglib/unnamed-1@2x.png"/>
        <img className="unnamed-2-icon7" alt="" src="/imglib/unnamed-2@2x.png"/>
      </div>
    );
  }
}

export default Homepage;
