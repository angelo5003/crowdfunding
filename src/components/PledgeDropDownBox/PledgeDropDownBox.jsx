import SuccesModal from "../Modal/SuccesModal/SuccesModal";
import "./PledgeDropDownBoxStyles.css";
import { LiaDollarSignSolid } from "react-icons/lia";
import { ShowSuccesModalPropTypes } from "../../utils/PropTypes";

const PledgeDropDownBox = ({
  handleShowProductModal,
  pledgeAmount,
  handleChangeInput,
  handleSubmit,
  showSuccesModal,
}) => {
  return (
    <section className="dropdown-pledge-outer-container">
      <hr className="dropdown-pledge-hr-line" />
      <div className="dropdown-pledge-inner-container">
        <p className="dropdown-pledge-title">Enter your pledge</p>
        <div className="dropdown-pledge-controls">
          <form className="dropdown-pledge-input-container">
            <LiaDollarSignSolid className="dropdown-pledge-dollar-sign" />
            <input
              type="text"
              className="dropdown-pledge-input"
              value={pledgeAmount}
              onChange={handleChangeInput}
            />
          </form>
          <button className="dropdown-pledge-btn" onClick={handleSubmit}>
            Continue
          </button>
          {showSuccesModal ? (
            <SuccesModal
              handleSubmit={handleSubmit}
              handleShowProductModal={handleShowProductModal}
            />
          ) : null}
        </div>
      </div>
    </section>
  );
};

PledgeDropDownBox.propTypes = ShowSuccesModalPropTypes;

export default PledgeDropDownBox;
