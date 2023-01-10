import React, { Component } from "react";
import { Form, FormControl, Container, Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class Header extends Component {

  render() {

    var navbarStyle =  { minHeight:"80px"}
    var server = process.env.REACT_APP_SERVER;
    if (server !== "prd"){
      navbarStyle.backgroundImage = 'url("/imglib/watermark.'+server+'.png")';
    }


    var headerObjList = [
        {
            "id": "home",
            "label": "Home",
            "url": "/"
        },
        {
            "id": "faq",
            "label": "FAQ",
            "url": "/static/faq"
        },
        {
            "id": "history_list",
            "label": "Release History",
            "url": "/history_list"
        },
        {
            "id": "about",
            "label": "About",
            "url": "/static/about"
        }
    ];

    var urlDict = {};

    var pageId = window.location.href.split("/")[3];
    pageId = (pageId.trim() === "" ? "home" : pageId);
    var sOne = {color:"#ccc", margin:"0 10px 0px 0px"};
    var sTwo = {color:"#fff", margin:"0 10px 0px 0px"};

    var headerLinks = [];
    for (var i in headerObjList){
      var obj = headerObjList[i];
      var s = (obj.id === pageId ? sOne : sTwo);
      if (["api", "portal", "sparql"].indexOf(obj.id) !== -1){
          obj.url = urlDict[server][obj.id]
      }
      headerLinks.push(<Nav.Link id={"link_" +obj.id} key={"link_" +obj.id} href={obj.url} style={{fontWeight:"bold"}} style={s}>{obj.label}</Nav.Link>)
    }

    return (
      <Navbar className="globalheader"  variant="dark" expand="lg" 
        style={navbarStyle}
        >
        <Container fluid>
          <Navbar.Brand href="/" style={{fontSize:"30px"}}>
             <img alt="" src={process.env.PUBLIC_URL + '/imglib/logo.png'} 
            style={{width:"100%"}} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" style={{border:"0px dashed orange"}}>
            <Nav className="me-auto my-2 my-lg-0" navbarScroll 
              style={{fontSize:"20px", border:"0px dashed orange"}}>
                {headerLinks}
              <NavDropdown title="About" id="navbarScrollingDropdown"
                style={{display:"none"}}
              >
                <NavDropdown.Item href="/static//workflow">Integration Workflow</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action6">
                  Data Version 1.1
                </NavDropdown.Item>
                <NavDropdown.Item href="#action6">
                  Website Version 1.1
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
