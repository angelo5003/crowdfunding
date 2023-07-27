import "./ModalCloseBtnStyles.css";
import { MdClose } from "react-icons/md";
import { ShowProductModalPropTypes } from "../../../utils/PropTypes";

const ModalCloseBtn = ({ handleShowProductModal }) => {
  return (
    <div className="modal-close-btn-container">
      <button className="modal-close-btn">
        <MdClose
          className="modal-close-btn-icon"
          onClick={handleShowProductModal}
        />
      </button>
    </div>
  );
};

ModalCloseBtn.propTypes = ShowProductModalPropTypes;

export default ModalCloseBtn;
