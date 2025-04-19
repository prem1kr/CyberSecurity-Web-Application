import React from "react";
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const questions = [
  "How Can IT Companies Help Small Businesses?",
  "How Can I Find the Best IT Services in Portland, Oregon?",
  "Who Provides the Best Managed Services in Portland?",
  "What Is Meant by Managed IT Services?",
  "What Does Bytraid Offer Businesses?",
  "What Does a Fully Managed IT Environment Feature?"
];

const FAQ = () => (
  <Box sx={{ py: 10, background: "#0f0c29", color: "#fff", px: 4 }}>
    <Typography variant="h4" align="center" gutterBottom>Frequently Asked Questions</Typography>
    {questions.map((q, i) => (
      <Accordion key={i} sx={{ background: "#2a2a40", color: "#fff" }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{q}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
        </AccordionDetails>
      </Accordion>
    ))}
  </Box>
);

export default FAQ;