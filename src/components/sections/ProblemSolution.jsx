import "./ProblemSolution.css";
import useInView from "../../hooks/useInView";

const ProblemSolution = () => {
  const [ref, isVisible] = useInView();
  return (
    <section
      className={`problem-solution ${isVisible ? "visible" : ""}`}
      ref={ref}
    >
      <h2>Tired of cheap plastic dispensers?</h2>
      <p>Plastic waste bag holders break, look ugly, and feel cheap.</p>
      <h3>Dogobello offers elegant, leather-crafted holders made to last.</h3>
    </section>
  );
};

export default ProblemSolution;
