import ProductModalCard from "../ProductModalCard/ProductModalCard";
import "./ProductModalStyle.css";
import { Portal } from "react-portal";
import { ProductModalPropTypes } from "../../../utils/PropTypes";

const ProductModal = ({ openProductModal }) => {
  return (
    <>
      {openProductModal ? (
        <Portal>
          <div className="modal-background-container">
            <dialog className="modal-container">
              <ProductModalCard />
            </dialog>
          </div>
        </Portal>
      ) : null}
    </>
  );
};

ProductModal.propTypes = ProductModalPropTypes;

export default ProductModal;
