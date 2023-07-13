import ProgressBar from "../ProgressBar/ProgressBar";
import "./OverviewCardStyle.css";

const OverviewCard = () => {
  return (
    <div className="overview-card-outer-container">
      <article className="overview-card-container">
        <div className="overview-results">
          <h2 className="overview-result-title">$89,914</h2>
          <p className="overview-result-info">of $100,000 backed</p>
        </div>
        <hr className="overview-result-vertical-line" />
        <div className="overview-results">
          <h2 className="overview-result-title">5,007</h2>
          <p className="overview-result-info">total backers</p>
        </div>
        <hr className="overview-result-vertical-line" />
        <div className="overview-results">
          <h2 className="overview-result-title">56</h2>
          <p className="overview-result-info">days left</p>
        </div>
      </article>
      <ProgressBar />
    </div>
  );
};

export default OverviewCard;
