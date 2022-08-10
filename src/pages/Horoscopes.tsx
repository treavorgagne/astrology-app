import React from "react";
import { Typography, Container, Box } from "@mui/material/";
import Zodiacs from "../components/ZodiacList";

export default function About() {
  return (
    <Container sx={{ p: 2 }} maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Typography variant="h2" component="div" gutterBottom>
          Horoscope Generator
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Typography variant="h5" component="div" gutterBottom>
          Select your zodiac sign for your daily horoscope reading.
        </Typography>
      </Box>

      <Zodiacs />
    </Container>
  );
}
