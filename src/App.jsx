import FeatureSection from "./componetnts/FeatureSection";
import HeroSection from "./componetnts/HeroSection";
import NavBar from "./componetnts/NavBar";
import Workflow from "./componetnts/Workflow";
import Pricing from "./componetnts/Pricing"
import Testimonials from "./componetnts/Testimonials";
import Footer from "./componetnts/Footer";

function App() {
  return (
    <>
      <NavBar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}

export default App;
