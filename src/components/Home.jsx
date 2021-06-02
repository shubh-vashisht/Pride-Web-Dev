import React, { Component } from "react";
import Logo from "/Users/shubh/Desktop/Projects/pride/pride/src/photo.png";
class HomePage extends Component {
  render() {
    return (
      <div>
        <h1 className="display-1">Home Page</h1>
        <h2 className="display-3">Use the navbar Above to navigate!</h2>
        <img
          style={{
            width: "1000px",
            height: "300px",
            objectFit: "cover",
          }}
          src={Logo}
          alt="website logo"
        />
        <h3
          style={{
            height: "75px",
            position: "absolute",
            bottom: "50px",
          }}
          className="display-1"
        >
          This was made using react and nodejs!
        </h3>
      </div>
    );
  }
}

export default HomePage;
