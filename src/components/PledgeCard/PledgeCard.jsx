import "./PledgeCardStyle.css";

const PledgeCard = ({ info }) => {
  return (
    <div className="pledgecard-outer-container">
      <article className="pledgecard-inner-container">
        <div className="pledgecard-title-container">
          <h3>{info.productTitle}</h3>
          <p>{info.pledge}</p>
        </div>
        <p>{info.productDescription}</p>
        <div className="pledgecard-">
          <p>{info.productsLeft}left</p>
          <button>{info.productButton}</button>
        </div>
      </article>
    </div>
  );
};

export default PledgeCard;
