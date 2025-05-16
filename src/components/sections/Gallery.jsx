import "./Gallery.css";
import useInView from "../../hooks/useInView";

const Gallery = () => {
  const [ref, isVisible] = useInView();

  return (
    <section className={`gallery ${isVisible ? "visible" : ""}`} ref={ref}>
      <h2>See Dogobello in Action</h2>
      <div className="gallery-grid">
        <div className="gallery-item">
          <img src="/dog-first.jpg" alt="Dog First" className="default" />
          <img
            src="/dog-first-hover.jpg"
            alt="Dog First Hover"
            className="hover"
          />
        </div>
        <div className="gallery-item">
          <img src="/dog-second.jpg" alt="Dog Second" className="default" />
          <img
            src="/dog-second-hover.jpg"
            alt="Dog Second Hover"
            className="hover"
          />
        </div>
        <div className="gallery-item">
          <img src="/dog-third.jpg" alt="Dog Third" className="default" />
          <img
            src="/dog-third-hover.jpg"
            alt="Dog Third Hover"
            className="hover"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
