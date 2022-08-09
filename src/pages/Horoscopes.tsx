import React from "react";
import { Typography, Container, Box, Grid, Paper } from "@mui/material/";
import { styled } from "@mui/material/styles";
import Zodiacs from "../components/ZodiacList";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function About() {
  return (
    <Container sx={{ p: 2 }} maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Typography
          textAlign={"center"}
          variant="h1"
          component="div"
          gutterBottom
        >
          Horoscopes.io
        </Typography>
      </Box>
      <Zodiacs />
    </Container>
  );
}
