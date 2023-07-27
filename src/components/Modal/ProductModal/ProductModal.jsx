import ProductModalCard from "../ProductModalCard/ProductModalCard";
import "./ProductModalStyle.css";
import { Portal } from "react-portal";
import { ProductModalPropTypes } from "../../../utils/PropTypes";

const ProductModal = ({ openProductModal, handleShowProductModal }) => {
  return (
    <>
      {openProductModal ? (
        <Portal>
          <div className="modal-background-container">
            <ProductModalCard
              openProductModal={openProductModal}
              handleShowProductModal={handleShowProductModal}
            />
          </div>
        </Portal>
      ) : null}
    </>
  );
};

ProductModal.propTypes = ProductModalPropTypes;

export default ProductModal;
