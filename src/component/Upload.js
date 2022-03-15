import { Container } from "@mui/material";
import React from "react";

export default function Upload() {
  return (
    <Container sx={{ marginTop: 15 }}>
      <input type="file"></input>
    </Container>
  );
}
