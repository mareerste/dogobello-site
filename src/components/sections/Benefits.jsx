import "./Benefits.css";
import useInView from "../../hooks/useInView";

const Benefits = () => {
  const [ref, isVisible] = useInView();

  return (
    <section className={`benefits ${isVisible ? "visible" : ""}`} ref={ref}>
      <h2>Why Dogobello?</h2>
      <div className="benefits-grid">
        <div className="benefit">
          <h3>Genuine Leather</h3>
          <p>
            Handmade from premium, durable leather that ages beautifully with
            time.
          </p>
        </div>
        <div className="benefit">
          <h3>Elegant Design</h3>
          <p>
            Stylish accessory that complements your daily dog walks with a touch
            of class.
          </p>
        </div>
        <div className="benefit">
          <h3>Fits All Standard Bags</h3>
          <p>
            Compatible with all standard poop bags rolls for hassle-free use.
          </p>
        </div>
        <div className="benefit">
          <h3>Easy Clip System</h3>
          <p>
            Effortlessly attaches to any leash, belt, or bag. Always at hand
            when you need it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
