import React from "react";
import { Container, Grid } from "@mui/material";
import ChatBox from "./ChatBox"; // Assuming you have a component for chat interaction

const MainContent: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ChatBox />
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainContent;
