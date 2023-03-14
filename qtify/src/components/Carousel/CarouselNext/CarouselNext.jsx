import React from "react";
import { useSwiper } from "swiper/react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
function CarouselNext() {
  const swiper = useSwiper();
  return (
    <div
      style={{
        position: "absolute",
        width: "32px",
        height: "32px",
        right: "0px",
        top: "86px",
        zIndex: 10,
        borderRadius: "50%",
        background: "var(--color-primary)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={() => {
        swiper.slideNext();
      }}
    >
      <KeyboardArrowRightIcon />
    </div>
  );
}

export default CarouselNext;
