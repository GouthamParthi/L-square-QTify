import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./Accordion.module.css";

function Accordions({ faqsList }) {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      {faqsList.map((faq) => {
        return (
          <Accordion
            expanded={expanded === `panel${faq.panel}`}
            onChange={handleChange(`panel${faq.panel}`)}
            className={styles.accordion}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className={styles.expandIcon} />}
              className={styles.accordionSummary}
              aria-controls={`panel${faq.panel}bh-content`}
              id={`panel${faq.panel}bh-header`}
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                {faq.fQuestion}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={styles.accordionDetails}>
              <Typography>{faq.fAnswer}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}

export default Accordions;
