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
import { motion } from "framer-motion"; // Import motion for animation

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
      <motion.div
        style={{ flexBasis: "44%", flexShrink: 0 }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ mb: 4 }}>
          Frequently Asked Questions
        </Typography>

        {questions.map((q, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.2 }} // Delay to animate each accordion
          >
            <Accordion
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
          </motion.div>
        ))}
      </motion.div>

      {/* Right - Image Section */}
      <motion.div
        style={{ flexBasis: "45%", flexShrink: 0, textAlign: "center" }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Box
          component="img"
          src={faqImage}
          alt="FAQ Illustration"
          sx={{
            maxWidth: "80%",
            height: "auto",
            borderRadius: "12px", // Rounded corners for the image
          }}
        />
      </motion.div>
    </Box>
  </Box>
);

export default FAQ;
