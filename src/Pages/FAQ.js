import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import faqImage from "../assets/FQ.png";

const questions = [
  "How Can IT Companies Help Small Businesses?",
  "How Can I Find the Best IT Services in Portland, Oregon?",
  "Who Provides the Best Managed Services in Portland?",
  "What Is Meant by Managed IT Services?",
  "What Does Bytagig Offer Businesses?",
  "What Does a Fully Managed IT Environment Feature?",
];

const FAQ = () => (
  <Box
    sx={{
      py: 10,
      px: { xs: 2, md: 8 },
      background: "linear-gradient(135deg, #0d0d2b, #1a1a40)",
      color: "#fff",
    }}
  >
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        gap: "5%", // 10% gap between left and right
      }}
    >
      {/* Left - FAQ Section */}
      <Box sx={{ flexBasis: "44%", flexShrink: 0 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ mb: 4 }}>
          Frequently Asked Questions
        </Typography>

        {questions.map((q, i) => (
          <Accordion
            key={i}
            sx={{
              background: "none",
              color: "#eee",
              mb: 2,
              borderBottom: "1px solid rgba(134, 134, 134, 0.3)",
              borderRadius: "8px",
              "& .MuiSvgIcon-root": {
                color: "#b39ddb",
              },
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{q}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "#ccc" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      {/* Right - Image Section */}
      <Box
        sx={{
          flexBasis: "45%",
          flexShrink: 0,
          textAlign: "center",

        }}
      >
        <Box
          component="img"
          src={faqImage}
          alt="FAQ Illustration"
          sx={{ maxWidth: "80%", height: "auto" }}
        />
      </Box>
    </Box>
  </Box>
);

export default FAQ;
