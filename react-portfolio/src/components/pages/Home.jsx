import React from "react";

const Home = () => (
  <div className="container card mt-5">
    <div className="row mt-5 mb-4">
      <div className="col">
        <h2>Erin Lee Crocker's</h2>
        <h1>Portfolio Website</h1>
      </div>
    </div>
    <div className="row text-center">
      <div className="col">
      <a href="https://erinleecrocker.github.io/about" className="btn m-3 btn-light btn-lg">
        About Me
      </a>
      <a href="https://erinleecrocker.github.io/portfolio" className="btn m-3 btn-light btn-lg">
        My Portfolio
      </a>
      <a href="https://erinleecrocker.github.io/contact" className="btn m-3 btn-light btn-lg">
        Contact Me
      </a>
      </div>
    </div>
    <div className="row mt-5"></div>
  </div>
);

export default Home;
