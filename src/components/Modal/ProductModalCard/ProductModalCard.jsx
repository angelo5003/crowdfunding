import "./ProductModalCardStyles.css";
import ModalCloseBtn from "../ModalCloseBtn/ModalCloseBtn";
import { ShowProductModalPropTypes } from "../../../utils/PropTypes";
import backerData from "../../../data/backerData.json";

const ProductModalCard = ({ handleShowProductModal }) => {
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
              <div className="modal-details-outer-container" key={data.id}>
                <div className="modal-details-inner-container">
                  <input type="radio" />
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
