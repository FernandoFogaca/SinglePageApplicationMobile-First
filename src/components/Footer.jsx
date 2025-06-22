import { Box, Typography, IconButton } from "@mui/material";
import { Facebook, Instagram, YouTube, Github } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f5f5f5",
        padding: "10px 20px",
        textAlign: "center",
        marginTop: "40px",
      }}
    >
      <Box sx={{ mb: 1 }}>
        <IconButton
          href="https://www.facebook.com/EmmanuelMacron"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook />
        </IconButton>
        <IconButton
          href="https://www.instagram.com/emmanuelmacron/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram />
        </IconButton>
        <IconButton
          href="https://www.youtube.com/@EmmanuelMacron"
          target="_blank"
          rel="noopener noreferrer"
        >
          <YouTube />
        </IconButton>
      </Box>

      <Typography variant="body2" color="text.secondary">
        Developed by Fernando Fogaça · All rights reserved · 2025
        
  
      </Typography>
    </Box>
  );
}