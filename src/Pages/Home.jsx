import "./HomeStyles.css";
import ProductTitleCard from "../components/ProductTitleCard/ProductTitleCard";
import OverviewCard from "../components/OverviewCard/OverviewCard";

const Home = () => {
  return (
    <div className="home-page-outer-container">
      <ProductTitleCard />
      <OverviewCard />
    </div>
  );
};

export default Home;
