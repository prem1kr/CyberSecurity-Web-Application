import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
  useMediaQuery,
  useTheme,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { styled } from "@mui/system";
import image1 from "../assets/Formimage.png";

// Custom-styled TextField
const StyledTextField = styled(TextField)({
  "& .MuiFilledInput-root": {
    borderRadius: "6px",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    color: "#fff",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    fontSize: "14px",
    height: "48px",
  },
  "& .MuiFilledInput-root.Mui-focused": {
    backgroundColor: "rgba(255, 255, 255, 0.08)",
  },
  "& .MuiFilledInput-root:before": {
    borderBottom: "none",
  },
  "& .MuiFilledInput-root:after": {
    borderBottom: "none",
  },
  "& .MuiInputLabel-root": {
    color: "#ccc",
    fontSize: "13px",
  },
  "& .MuiFilledInput-input": {
    color: "#fff",
    padding: "12px",
  },
  "& label.Mui-focused": {
    color: "#aaa",
  },
});

const ContactForm = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });

  const [openPopup, setOpenPopup] = useState(false);

  const handleChange = (field) => (e) => {
    setFormValues((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = () => {
    setOpenPopup(true);
    setFormValues({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      message: "",
    });
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  const isFormComplete =
    formValues.firstName.trim() &&
    formValues.lastName.trim() &&
    formValues.email.trim() &&
    formValues.message.trim();

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #1a1a2e, #3a0ca3)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 2, sm: 4, md: "5%" },
        py: 8,
        fontFamily: "Arial, sans-serif",
        gap: 6,
      }}
    >
      {/* Left Section */}
      <Box
        sx={{
          width: isMobile ? "100%" : "40%",
          textAlign: isMobile ? "center" : "left",
        }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom color="white">
          Schedule A Free Consultation
        </Typography>
        <Typography
          variant="body1"
          color="gray"
          sx={{ mb: 4, fontSize: "14px" }}
        >
          For more information about any of our services or to request a quote,
          contact us today! We look forward to hearing from you – and we can’t
          wait to share our ideas to help your business succeed.
        </Typography>
        <Box
          component="img"
          src={image1}
          alt="Illustration"
          sx={{
            width: "100%",
            objectFit: "contain",
            borderRadius: "12px",
            height: isMobile ? "250px" : "400px",
          }}
        />
      </Box>

      {/* Right Section */}
      <Box
        sx={{
          width: isMobile ? "100%" : "40%",
          mt: isMobile ? 4 : "-100px",
        }}
      >
        <Paper
          elevation={0}
          sx={{
            p: { xs: 2, md: 3 },
            borderTopRightRadius: "20px",
            backgroundColor: "transparent",
            color: "white",
          }}
        >
          <Grid container spacing={3}>
            {/* Name Fields */}
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: "20px",
                mt: isMobile ? "-70px" : "0",
              }}
            >
              <Grid item xs={12} sm={6}>
                <StyledTextField
                  fullWidth
                  label="First name *"
                  variant="filled"
                  value={formValues.firstName}
                  onChange={handleChange("firstName")}
                  InputProps={{ disableUnderline: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <StyledTextField
                  fullWidth
                  label="Last name *"
                  variant="filled"
                  value={formValues.lastName}
                  onChange={handleChange("lastName")}
                  InputProps={{ disableUnderline: true }}
                />
              </Grid>
            </Box>

            {/* Other Fields */}
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <Grid item xs={12}>
                <StyledTextField
                  fullWidth
                  label="Email *"
                  variant="filled"
                  value={formValues.email}
                  onChange={handleChange("email")}
                  InputProps={{ disableUnderline: true }}
                />
              </Grid>
              <Grid item xs={12}>
                <StyledTextField
                  fullWidth
                  label="Company"
                  variant="filled"
                  value={formValues.company}
                  onChange={handleChange("company")}
                  InputProps={{ disableUnderline: true }}
                />
              </Grid>
              <Grid item xs={12}>
                <StyledTextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Where did you hear about CTRL? *"
                  placeholder="Enter your message..."
                  variant="filled"
                  value={formValues.message}
                  onChange={handleChange("message")}
                  InputProps={{
                    disableUnderline: true,
                    style: { height: "auto" },
                  }}
                  sx={{
                    "& .MuiFilledInput-root": {
                      alignItems: "flex-start",
                    },
                  }}
                />
              </Grid>

              {/* Submit Button */}
              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={handleSubmit}
                  disabled={!isFormComplete}
                  sx={{
                    background: "linear-gradient(to right, #5e00c2, #ff00d4)",
                    borderRadius: "8px 20px 8px 8px",
                    fontWeight: 500,
                    fontSize: "14px",
                    py: 1.2,
                    textTransform: "none",
                    boxShadow: "none",
                    opacity: isFormComplete ? 1 : 0.6,
                    "&:hover": {
                      background:
                        "linear-gradient(to right, #4400a2, #d100c1)",
                    },
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </Box>
          </Grid>
        </Paper>
      </Box>

      {/* Success Dialog */}
      <Dialog open={openPopup} onClose={handleClosePopup}>
        <DialogTitle>Query Submitted</DialogTitle>
        <DialogContent>
          <Typography>
            Your query has been successfully submitted. We'll get back to you
            shortly!
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePopup} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ContactForm;
