import { useState } from "react";
import SuccesModal from "../Modal/SuccesModal/SuccesModal";
import "./PledgeDropDownBoxStyles.css";
import { LiaDollarSignSolid } from "react-icons/lia";
import { ShowSuccesModalPropTypes } from "../../utils/PropTypes";

const PledgeDropDownBox = () => {
  const [showSuccesModal, setShowSuccesModal] = useState(false);
  const [pledgeAmount, setPledgeAmount] = useState("");

  const handleChange = (e) => {
    e.preventDefault();

    setPledgeAmount(e.target.value);
    console.log(`pledgeamount typed:`, pledgeAmount);
  };

  const handleShowSuccesModal = () => {
    setShowSuccesModal(!showSuccesModal);
    console.log(`you clicked on the continue button`);
  };
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
              onChange={handleChange}
            />
          </form>
          <button
            className="dropdown-pledge-btn"
            onClick={handleShowSuccesModal}
          >
            Continue
          </button>
          {showSuccesModal ? (
            <SuccesModal handleShowSuccesModal={handleShowSuccesModal} />
          ) : null}
        </div>
      </div>
    </section>
  );
};

PledgeDropDownBox.propTypes = ShowSuccesModalPropTypes;

export default PledgeDropDownBox;
