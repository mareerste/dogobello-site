import Header from "./components/sections/Header";
import HeroSection from "./components/sections/HeroSection";
import ProblemSolution from "./components/sections/ProblemSolution";
import Benefits from "./components/sections/Benefits";
import Gallery from "./components/sections/Gallery";
import Testimonials from "./components/sections/Testimonials";
import CallToAction from "./components/sections/CallToAction";
import Footer from "./components/sections/Footer";
import QualityPromise from "./components/sections/QualityPromise";

function App() {
  return (
    <>
      <Header />
      <HeroSection
        title="Luxury Leather Poop Bag Holder"
        imageUrl="/background-image.jpg"
      />
      <ProblemSolution />
      <Benefits />
      <Gallery />
      <Testimonials />
      <QualityPromise />
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
