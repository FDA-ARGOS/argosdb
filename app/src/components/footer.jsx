import React, { Component } from "react";
import { SocialIcon } from 'react-social-icons';


class Footer extends Component {
  render() {
    return (
    <section className="border">
      <footer className="text-center text-lg-start bg-light text-muted">

        <section className="globalfooter" style={{padding:"0px", border:"0px dashed orange"}}>
          <div className="container text-center text-md-start " 
              style={{height:"200px",border:"0px dashed orange"}}>
            <div className="row mt-3" style={{ display:"none",border:"0px dashed orange"}}>
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4" style={{width:"40%"}}>
                  <span className="text-uppercase fw-bold mb-4">ABOUT</span><br/>
                      Here you can use rows and columns to organize your footer content. Lorem ipsum
                      dolor sit amet, consectetur adipisicing elit. Lorem ipsum
                      dolor sit amet, consectetur adipisicing elit. Lorem ipsum
                      dolor sit amet, consectetur adipisicing elit.
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <span className="text-uppercase fw-bold mb-4">QUICK LINKS</span><br/>
                    <a href="#!" className="text-reset">About Us</a><br/>
                    <a href="#!" className="text-reset">Contact Us</a><br/>
                    <a href="#!" className="text-reset">Privacy Policy</a><br/>
                    <a href="#!" className="text-reset">Sitemap</a>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <span className="text-uppercase fw-bold mb-4">CONTACT</span><br/>
                    Addrss: New York, NY 10012, US<br/>
                    Email: info@example.com<br/>
                    Phone: + 01 234 567 88<br/>
              </div>
            </div>
          </div>
      </section>

      <div className="text-left p-4" style={{background: "DodgerBlue", color:"#fff", borderTop:"1px solid #fff"}}>
      </div>
    </footer>
  </section>

    );
  }
}

export default Footer;
