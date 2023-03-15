import React from "react";
import { useSwiper } from "swiper/react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
function CarouselPrev() {
  const swiper = useSwiper();
  return (
    <div
      style={{
        position: "absolute",
        width: "32px",
        height: "32px",
        left: "0px",
        top: "33%",
        zIndex: 10,
        borderRadius: "50%",
        background: "var(--color-primary)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={() => {
        swiper.slidePrev();
      }}
    >
      <KeyboardArrowLeftIcon />
    </div>
  );
}

export default CarouselPrev;
