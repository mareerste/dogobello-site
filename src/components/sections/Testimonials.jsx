import "./Testimonials.css";
import useInView from "../../hooks/useInView";

const Testimonials = () => {
  const [ref, isVisible] = useInView();

  return (
    <section className={`testimonials ${isVisible ? "visible" : ""}`} ref={ref}>
      <h2>What Our Customers Say</h2>
      <div className="testimonial">
        <p>
          "Finally, a poop bag holder that looks as good as it works. I love the
          leather finish and it matches my dog's leash perfectly."
        </p>
        <h4>— Emma K., New York</h4>
      </div>
      <div className="testimonial">
        <p>
          "Elegant, durable, and practical. Dogobello became my favorite daily
          walk companion. Highly recommend!"
        </p>
        <h4>— Daniel M., Berlin</h4>
      </div>
    </section>
  );
};

export default Testimonials;
