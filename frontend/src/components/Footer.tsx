import React from "react";
import { Typography } from "@mui/material";
import "./Footer.css"; // Import the CSS file

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Typography variant="body2" align="center">
        The Research and Development (R&D) department
      </Typography>
    </footer>
  );
};

export default Footer;
