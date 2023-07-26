import "./ProductModalCardStyles.css";
import backerData from "../../../data/backerData.json";

const ProductModalCard = () => {
  console.log(`backerData:`, backerData);
  return (
    <>
      <section className="modal-outer-container">
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
                  <p>{data.backerLeft} left</p>
                </div>
                <p className="modal-details-text">{data.backerText}</p>
              </div>
            );
          })}
      </section>
    </>
  );
};

export default ProductModalCard;
