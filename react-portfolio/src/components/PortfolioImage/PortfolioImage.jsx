

const PortfolioImage = (props) => {
  return (
    <div className= "container mt-3">
      <div className="card text-center">
        <div className="card-header">
          <h4>{props.title}</h4>
        </div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" className="btn btn-primary">
            View Deployed App
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioImage;
