import "./PledgeDropDownBoxStyles.css";

const PledgeDropDownBox = () => {
  return (
    <section className="dropdown-pledge-outer-container">
      <hr className="dropdown-pledge-hr-line" />
      <div className="dropdown-pledge-inner-container">
        <p className="dropdown-pledge-title">Enter your pledge</p>
        <div className="dropdown-pledge-controls">
          <span className="dropdown-pledge-input-container">
            $
            <input type="text" className="dropdown-pledge-input" />
          </span>
          <button className="dropdown-pledge-btn">Continue</button>
        </div>
      </div>
    </section>
  );
};

export default PledgeDropDownBox;
