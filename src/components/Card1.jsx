import React, { Component } from "react";
import card1 from "../assets/card1.png"

export class Card1 extends Component {
  render() {
    return (
      <div class="" style={{ margin: "80px 50px"}}>
        <div class="card-body">
          <div class="row">
            <div class="col-sm-6">
                <div class="card-body">
                  <h5 class="card-title"><b>The easiest Video maker for social media marketing</b></h5>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi hic tempora labore, dolorem quos, inventore cupiditate, ipsa officia illo hic tempora labore
                  </p>
                  <a href="#" class="btn badge-pill badge-primary" style={{backgroundColor:"#3498eb"}}>
                    Sign up free
                  </a>
              </div>
            </div>
            <div class="col-sm-6">
                <div class="card-body">
                  <h5 class="card-title" style={{color:"#04c289"}}>Videos <strong>In Minutes</strong></h5>
                  <p class="card-text">
                    <img src={card1} />
                  </p>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card1;
