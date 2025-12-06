import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // console.log("ScrollToTop component mounted", location);

  return null;
};

export default ScrollToTop;
