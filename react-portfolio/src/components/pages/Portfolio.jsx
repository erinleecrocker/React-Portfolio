import React from "react";
import PortfolioImage from "../PortfolioImage/PortfolioImage";
import DateNightPlanner from "../images/date-night-planner.png";
import WeatherDashboard from "../images/WeatherDashboard.png";
import WorkDayScheduler from "../images/WorkDayScheduler.png"

const Portfolio = () => (
  <div className="text-center mt-5">
    <h2 className="mb-5">PORTFOLIO</h2>
    <PortfolioImage 
      title={"The Date Night Planner"} 
      image={DateNightPlanner} 
      imageName={"The Date Night Planner"}
      details={"The Date Night Planner is a web application created to assist individuals who can’t go out for a date night and are running out of ideas for date nights at home. This application reduces the pressure of finding new food, cocktails, and movie ideas."}
      gitHubLink={"https://github.com/erinleecrocker/The-Date-Night-Planner.git"}
      buttonLink={"https://cgriffin332.github.io/The-Date-Night-Planner/"}
      />
    <PortfolioImage 
      title={"Work Day Scheduler"}
      image={WorkDayScheduler}
      imageName={"Work Day Scheduler"}
      details={""}
      gitHubLink={"https://github.com/erinleecrocker/daily-planner"}
      buttonLink={"https://erinleecrocker.github.io/daily-planner/"}
      />
    <PortfolioImage 
      title={"Weather Dashboard"}
      image={WeatherDashboard}
      imageName={"Weather Dashboard"}
      details={""}
      gitHubLink={"https://github.com/erinleecrocker/Weather-Dashboard"}
      buttonLink={"https://erinleecrocker.github.io/Weather-Dashboard/"}/>
      <div className="row mt-5">

      </div>
  </div>
);

export default Portfolio;
