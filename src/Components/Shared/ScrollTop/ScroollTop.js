// ==================== reactjs =======================
import { useEffect, useState } from "react";

// ===================== icon =========================
import { TbArrowTopCircle } from "react-icons/tb";

// ===================== css===========================
import "./ScrollTop.css";


function ScrollTop() {
  const [hide, sethide] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > window.innerHeight) {
        sethide(true);
      } else {
        sethide(false);
      }
    });
  }, []);

  let handolScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {hide && (
        <div className="scroll-top" onClick={() => handolScrollTop()}>
          <TbArrowTopCircle className="icon-scrolltop" />
        </div>
      )}
    </>
  );
}

export default ScrollTop;
