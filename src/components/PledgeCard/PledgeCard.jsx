import "./PledgeCardStyle.css";
import { PledgeCardPropTypes } from "../../utils/PropTypes";

const PledgeCard = ({ info }) => {
  return (
    <div className="pledgecard-outer-container">
      <article className="pledgecard-inner-container">
        <div className="pledgecard-title-container">
          <h3>{info.productTitle}</h3>
          <p className="pledgecard-pledge-text">{info.pledge}</p>
        </div>
        <p className="pledgecard-product-description">
          {info.productDescription}
        </p>
        <div className="pledgecard-overview-container">
          <p className="pledgecard-pledge-products-left">
            {info.productsLeft} left
          </p>
          <button className="pledgecard-btn">{info.productButton}</button>
        </div>
      </article>
    </div>
  );
};

PledgeCard.propTypes = PledgeCardPropTypes;

export default PledgeCard;
