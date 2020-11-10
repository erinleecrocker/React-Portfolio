import React from "react";
import Erin from "../images/Erin-Professional-for-website.jpg";

const About = () => (
  <div>
    <div className= "container">
      <div className="text-center card ml-auto mr-auto mt-4 w-75">
        <h2 className="mt-5">About Me</h2>
      <img className="mt-3 ml-auto mr-auto" src={Erin} alt="Erin Crocker"/>
      <div className="card-body">
      <p className="ml-5 mr-5">
        Erin Crocker is a graphic designer acquiring her certification in web
        development through Georgia Tech's Web Development Bootcamp. With recent
        changes in the world and economy she will use her combined skill sets to
        become a proficient developer and designer. Her most recent work has
        centered around HTML, CSS, and JavaScript. Learning jQuery, how to make
        use AJAX calls, and working collaboratively with teams of other
        developers.
      </p>
      <p className="ml-5 mr-5">
        Erin enjoys drawing and painting in her free time, as well as outdoor
        activities such as; kayaking, biking, and hiking with her son. With her
        boundless creativity and love of learning every challenge becomes a chance
        to grow and become more versatile.
      </p>
      </div>
      <div className="row mb-5">
        <div className="col">
        <a href="https://www.linkedin.com/in/erinleecrocker/" target="_blank" rel="noreferrer">
          <button type="button" class="btn btn-light m-2">Linked-In</button>
        </a>
        <a href="https://github.com/erinleecrocker" target="_blank" rel="noreferrer">
          <button type="button" class="btn btn-light m-2">Github Profile</button>
        </a>
        <a href="" target="_blank" rel="noreferrer">
          <button type="button" class="btn btn-light m-2">Resume</button>
        </a> 
        </div>
      </div>
      </div>
    </div>
  </div>
);

export default About;
