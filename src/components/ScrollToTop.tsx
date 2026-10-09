import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Springt bei jedem Seitenwechsel nach oben.
// Bei Links mit Sprungmarke (z. B. /#kontakt) wird zum passenden Abschnitt gescrollt.
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const timer = window.setTimeout(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
    }, 100);
    return () => window.clearTimeout(timer);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
