import { useState } from "react";
import "./PledgeCardStyle.css";
import { PledgeCardPropTypes } from "../../utils/PropTypes";
import ProductModal from "../Modal/ProductModal/ProductModal";

const PledgeCard = ({ info }) => {
  const [openProductModal, setOpenProductModal] = useState(false);

  const handleShowProductModal = () => {
    setOpenProductModal(!openProductModal);
    console.log(`You've clicked on the modal btn`);
  };
  return (
    <>
      <div className="pledgecard-outer-container">
        <article
          className={`${
            info.id === 3
              ? "pledgecard-out-of-stock"
              : "pledgecard-inner-container"
          }`}
        >
          <div className="pledgecard-title-container">
            <h3 className="pledge-product-title">{info.productTitle}</h3>
            <p className="pledgecard-pledge-text">{info.pledge}</p>
          </div>
          <p className="pledgecard-product-description">
            {info.productDescription}
          </p>
          <div className="pledgecard-overview-container">
            <p className="pledgecard-pledge-products-left">
              {info.productsLeft}{" "}
              <span className="pledgecard-left-text">left</span>
            </p>
            <button
              className="pledgecard-btn"
              onClick={handleShowProductModal}
              disabled={info.id === 3}
            >
              {info.productButton}
            </button>
          </div>
        </article>
      </div>
      {openProductModal ? (
        <ProductModal
          openProductModal={openProductModal}
          handleShowProductModal={handleShowProductModal}
        />
      ) : null}
    </>
  );
};

PledgeCard.propTypes = PledgeCardPropTypes;

export default PledgeCard;
