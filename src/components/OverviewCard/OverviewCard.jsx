import "./OverviewCardStyle.css";

const OverviewCard = () => {
  return (
    <article className="overview-card-container">
      <h2>$89,914</h2>
      <p>of $100,000 backed</p>
      <h2>5,007</h2>
      <p>total backers</p>
      <h2>56</h2>
      <p>days left</p>
      <div>Progress bar</div>
    </article>
  );
};

export default OverviewCard;
