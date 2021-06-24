import React, { Component } from "react";
// import video from "../vid.mp4";
class HomePage extends Component {
  render() {
    return (
      <div>
        <h1 className="display-1">Home Page</h1>
        <h2 className="display-3">Use the navbar Above to navigate!</h2>
        {/* <video width="100%" height="100%" autoPlay loop>
          <source src={video} type="video/mp4" />
        </video> */}
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
