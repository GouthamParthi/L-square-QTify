import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./Accordion.module.css";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
function Accordions({ faqsList }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className={styles.accordion}>
      {faqsList.map((faq) => {
        return (
          <Accordion
            expanded={expanded === `panel${faq.panel}`}
            onChange={handleChange(`panel${faq.panel}`)}
            style={{
              width: "1135px",
              background: "var(--color-black)",
              color: "var(--color-white)",
              border: "1px solid var(--color-white)",
              borderRadius: "10px",
              marginBottom: "24px",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  style={{
                    color: "var(--color-primary)",
                    fontSize: "40px",
                  }}
                />
              }
              style={{
                borderBottomLeftRadius: "10px",
              }}
              aria-controls={`panel${faq.panel}bh-content`}
              id={`panel${faq.panel}bh-header`}
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                {faq.fQuestion}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              style={{
                background: "var(--color-white)",
                color: "var(--color-black)",
                borderBottomLeftRadius: "9px",
                borderBottomRightRadius: "9px",
              }}
            >
              <Typography>{faq.fAnswer}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}

export default Accordions;
