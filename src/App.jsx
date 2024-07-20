import FeatureSection from "./componetnts/FeatureSection";
import HeroSection from "./componetnts/HeroSection";
import NavBar from "./componetnts/NavBar";
import Workflow from "./componetnts/Workflow";

function App() {
  return (
    <>
      <NavBar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
      </div>
    </>
  );
}

export default App;
