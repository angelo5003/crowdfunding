import "./HomeStyles.css";
import ProductTitleCard from "../components/ProductTitleCard/ProductTitleCard";
import OverviewCard from "../components/OverviewCard/OverviewCard";
import About from "./About/About";

const Home = () => {
  return (
    <div className="home-page-outer-container">
      <ProductTitleCard />
      <OverviewCard />
      <About />
    </div>
  );
};

export default Home;
