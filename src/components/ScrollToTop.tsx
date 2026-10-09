import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Springt bei jedem Seitenwechsel (z. B. Footer → Impressum) nach oben.
// Links mit Sprungmarke (#kontakt) bleiben unverändert.
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
