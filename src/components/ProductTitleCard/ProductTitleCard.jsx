import "./ProductTitleCardStyles.css";
import BrandLogo from "../../assets/images/logo-mastercraft.svg";
import BookMarkIcon from "../../assets/images/icon-bookmark.svg";

const ProductTitleCard = () => {
  return (
    <div className="product-title-card-outer-container">
      <img src={BrandLogo} alt="product-logo" className="brand-logo-img" />
      <section>
        <div className="product-title-container">
          <h2 className="product-title">Mastercraft Bamboo Monitor Riser</h2>
          <p className="product-info">
            A beautiful & handcrafted monitor stand to reduce neck and eye
            strain.
          </p>
        </div>
        <div className="product-btn-container">
          <button className="green-btn">Back this project</button>
          <button className="bookmark-btn">
            <img src={BookMarkIcon} alt="bookmark" /> Bookmark
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProductTitleCard;
