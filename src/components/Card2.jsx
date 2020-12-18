import React, { Component } from "react";
import card2 from "../assets/card2.png"

export class Card2 extends Component {
  render() {
    return (
      <div class="card" style={{ margin: "80px 50px",backgroundColor:"#f7f7f7"  }}>
        <div class="card-body">
          <div class="row">
            <div class="col-sm-6">
                <div class="card-body">
                  <p class="card-text">
                    <img src={card2} />
                  </p>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="card-body">
                  <h5 class="card-title"><b>Turn content / link into video -</b></h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" class="btn badge-pill badge-primary" style={{backgroundColor:"#3498eb"}}>
                    Get started for free
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card2;
