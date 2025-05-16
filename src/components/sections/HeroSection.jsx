import "./HeroSection.css";

const HeroSection = ({ title }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{title}</h1>
        <p>
          Crafted elegance for every walk. Forget plastic, upgrade to Dogobello.
        </p>
        <button>Shop Now</button>
      </div>
    </section>
  );
};

export default HeroSection;
