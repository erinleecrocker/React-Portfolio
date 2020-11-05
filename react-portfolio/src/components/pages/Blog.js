import React from "react";
import PortfolioImage from "../PortfolioImage/PortfolioImage";
import DateNightPlanner from "../images/date-night-planner.png";

const Blog = () => (
  <div class="text-center mt-5 mb-5">
    <h3>PORTFOLIO</h3>
    <PortfolioImage 
      title={"The Date Night Planner"} 
      image={DateNightPlanner} 
      imageName={"The Date Night Planner"}
      details={"The Date Night Planner is a web application created to assist individuals who can’t go out for a date night and are running out of ideas for date nights at home. This application reduces the pressure of finding new food, cocktails, and movie ideas."}
      gitHubLink={"https://github.com/erinleecrocker/The-Date-Night-Planner.git"}
      buttonLink={"https://cgriffin332.github.io/The-Date-Night-Planner/"}
      />
    <PortfolioImage title={"The Wedding Pot"}/>
    <PortfolioImage title={"Weather Dashboard"}/>
  </div>
);

export default Blog;
