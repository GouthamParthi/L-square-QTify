import React from "react";
import { useSwiper } from "swiper/react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import styles from "./CarouselNext.module.css";
function CarouselNext() {
  const swiper = useSwiper();
  return (
    <div
      onClick={() => {
        swiper.slideNext();
      }}
      className={styles.carouselNext}
    >
      <KeyboardArrowRightIcon />
    </div>
  );
}

export default CarouselNext;
