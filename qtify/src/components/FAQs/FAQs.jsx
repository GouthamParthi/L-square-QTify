import React from "react";
import Accordions from "../Accordion/Accordion";
import styles from "./FAQs.module.css";
function FAQs() {
  const faqsList = [
    {
      fQuestion: "Is QTify free to use?",
      fAnswer: "Yeah It is absolutely free",
      panel: 1,
    },
    {
      fQuestion: "Can I download and listen to songs offline?",
      fAnswer:
        "Sorry, unfortunately we don't provide the service to download any songs.",
      panel: 2,
    },
  ];
  return (
    <div className={styles.faq}>
      <header>FAQs</header>
      <Accordions faqsList={faqsList} />
    </div>
  );
}

export default FAQs;
