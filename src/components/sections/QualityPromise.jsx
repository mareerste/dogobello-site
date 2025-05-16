import "./QualityPromise.css";
import useInView from "../../hooks/useInView";

const QualityPromise = () => {
  const [ref, isVisible] = useInView();

  return (
    <section
      className={`quality-promise ${isVisible ? "visible" : ""}`}
      ref={ref}
    >
      <h2>Our Promise to You</h2>
      <p>
        At Dogobello, we craft every piece with passion, precision, and a love
        for timeless elegance. Our leather accessories aren't just
        practical—they're an extension of your style and values.
      </p>
    </section>
  );
};

export default QualityPromise;
