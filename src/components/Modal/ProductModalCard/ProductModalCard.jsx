import { useState, useEffect } from "react";
import "./ProductModalCardStyles.css";
import ModalCloseBtn from "../ModalCloseBtn/ModalCloseBtn";
import { ShowProductModalPropTypes } from "../../../utils/PropTypes";
import backerData from "../../../data/backerData.json";

const ProductModalCard = ({ handleShowProductModal }) => {
  const [favorite, setFavorite] = useState("");

  const handleChange = (e) => {
    setFavorite(e.target.value);
    console.log(`you clicked on favorite:`, favorite);
  };

  useEffect(() => {
    const handleCloseModalOnEsc = (e) => {
      // check if the Escape key is pressed
      if (e.key === "Escape") {
        // close the  modal
        handleShowProductModal();
      }
    };
    window.addEventListener("keydown", handleCloseModalOnEsc);
    // remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("keydown", handleCloseModalOnEsc);
    };
  }, [handleShowProductModal]);

  return (
    <>
      <section className="modal-outer-container">
        <ModalCloseBtn handleShowProductModal={handleShowProductModal} />
        <h3 className="modal-title">Back this project</h3>
        <p className="modal-intro-text">
          Want to support us in bringing Mastercraft Bamboo Monitor Riser to the
          world?
        </p>
        {Array.isArray(backerData) &&
          backerData.map((data) => {
            return (
              <div
                className={`modal-details-outer-container ${
                  favorite === data.name ? "selected" : ""
                }`} // check if favorite === to the data.name that is selected and if that is true add the className selected to it, if not don't change the className
                key={data.id}
              >
                <div className="modal-details-inner-container">
                  <input
                    type="radio" // set the type of the input field to a radio btn
                    name="backer" // Give all the radio buttons in this group the same name, "backer".This tells the browser that these radio buttons belong to the same group and only one can be selected at a time.
                    value={data.name} // Set the value of the radio button to the name of the data
                    onChange={handleChange} // add an onChange event handler to handle changes to the radio button
                  />
                  <h3 className="modal-detail-title">{data.backerTitle}</h3>
                  <h3 className="modal-detail-title">
                    Pledge ${data.backerPledge} or more
                  </h3>
                  <p className="modal-details-left-numbers">
                    {data.backerLeft}{" "}
                    <span className="modal-details-left">left</span>
                  </p>
                </div>
                <p className="modal-details-text">{data.backerText}</p>
              </div>
            );
          })}
      </section>
    </>
  );
};

ProductModalCard.propTypes = ShowProductModalPropTypes;

export default ProductModalCard;
