import "./PortfolioImage.css";

const PortfolioImage = (props) => {
  return (
    <div className= "container mt-3">
      <div className="card text-center">
        <div className="card-header">
          <h4>{props.title}</h4>
        </div>
        <div className="card-body">
          <img src={props.image} href={props.imageName}/>
          <p className="card-text">{props.details}</p>
          <a href={props.buttonLink} target="_blank" className="btn btn-primary">
            View Deployed App
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioImage;
