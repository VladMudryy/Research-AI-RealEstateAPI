import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import { CssBaseline, Container } from "@mui/material";

const App: React.FC = () => {
  return (
    <div>
      <CssBaseline />
      <Header />
      <Container>
        <MainContent />
      </Container>
      <Footer />
    </div>
  );
};

export default App;
