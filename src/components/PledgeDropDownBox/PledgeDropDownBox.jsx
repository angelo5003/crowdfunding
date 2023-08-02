import { useState } from "react";
import SuccesModal from "../Modal/SuccesModal/SuccesModal";
import "./PledgeDropDownBoxStyles.css";
import { LiaDollarSignSolid } from "react-icons/lia";

const PledgeDropDownBox = () => {
  const [showSuccesModal, setShowSuccesModal] = useState(false);

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
          <span className="dropdown-pledge-input-container">
            <LiaDollarSignSolid className="dropdown-pledge-dollar-sign" />
            <input type="text" className="dropdown-pledge-input" />
          </span>
          <button
            className="dropdown-pledge-btn"
            onClick={handleShowSuccesModal}
          >
            Continue
          </button>
          {showSuccesModal ? <SuccesModal /> : null}
        </div>
      </div>
    </section>
  );
};

export default PledgeDropDownBox;
