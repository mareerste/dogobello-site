import "./CallToAction.css";
import useInView from "../../hooks/useInView";

const CallToAction = () => {
  const [ref, isVisible] = useInView();

  return (
    <section
      className={`call-to-action ${isVisible ? "visible" : ""}`}
      ref={ref}
    >
      <h2>Ready to Walk in Style?</h2>
      <p>Discover the Dogobello collection and upgrade your daily walks.</p>
      <button>Shop Now</button>
    </section>
  );
};

export default CallToAction;
