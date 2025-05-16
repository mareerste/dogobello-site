import "./Footer.css";
import useInView from "../../hooks/useInView";

const Footer = () => {
  const [ref, isVisible] = useInView();

  return (
    <footer className={`footer ${isVisible ? "visible" : ""}`} ref={ref}>
      <div className="footer-logo">DOGGOBELLO</div>
      <p>&copy; {new Date().getFullYear()} Dogobello. All rights reserved.</p>
      <div className="footer-links">
        <a href="#">Instagram</a>
        <a href="#">Facebook</a>
        <a href="#">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;
