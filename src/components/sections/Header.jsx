import { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hideTopBar, setHideTopBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHideTopBar(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`top-bar ${hideTopBar ? "hidden" : ""}`}>
        <span className="desktop-only">
          Because every walk deserves a touch of elegance. Crafted with care,
          designed for style.
        </span>
        <span className="mobile-only">
          Because every walk deserves a touch of elegance.
        </span>
      </div>
      <header className={`dogobello-header ${hideTopBar ? "sticky" : ""}`}>
        <div className="logo">
          <img src="/logo.PNG" alt="Dogobello Logo" />
          DOGGOBELLO
        </div>
        <nav className={menuOpen ? "open" : ""}>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div
          className={`burger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
    </>
  );
};

export default Header;
