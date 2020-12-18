import React, { Component } from "react";
import recreate from "../assets/recreate_logo.png";

export class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <img src={recreate} alt="recreate_logo" />
        </a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item ">
              <a class="nav-link" style={{color:"#3498eb"}} href="#">
                Demo &nbsp;|
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" style={{color:"#3498eb"}} href="#">
                Team &nbsp;| 
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" style={{color:"#3498eb"}} href="#">
                Blog &nbsp;| 
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" style={{color:"#3498eb"}} href="#">
                Product &nbsp;| 
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" style={{color:"#3498eb"}} href="#">
                Contact 
              </a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <button class="btn btn-outline-primary my-2 my-sm-0" type="button">
              Pricing
            </button>&nbsp;&nbsp;
            <button class="btn btn-primary my-2 my-sm-0" type="button">
              Sign in
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

export default Navbar;
