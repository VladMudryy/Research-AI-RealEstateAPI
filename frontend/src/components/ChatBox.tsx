import React, { useState } from "react";
import { TextField, Button, Paper } from "@mui/material";
import RealEstateTable from "./RealEstateTable";
import useApiCall from "../hooks/useApiCall";
import { AxiosError } from "axios";
import { RealEstateData } from "../types/types";

const ChatBox: React.FC = () => {
  const [prompt, setPrompt] = useState("");
  const [realEstateData, setRealEstateData] = useState<RealEstateData[]>([]);
  const { loading, error, makeApiCall } = useApiCall<RealEstateData[]>();

  const handleSendPrompt = async () => {
    try {
      const response = await makeApiCall("http://localhost:3000/chat", "POST", {
        prompt,
      });
      if (response.data) {
        setRealEstateData(response.data);
      }
    } catch (error) {
      console.error("Error sending prompt:", error);
    }
  };

  return (
    <Paper style={{ padding: "20px", marginTop: "20px" }}>
      <TextField
        label="Enter your prompt"
        variant="outlined"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        fullWidth
        multiline
        rows={4}
        margin="normal"
      />
      <Button variant="contained" onClick={handleSendPrompt} disabled={loading}>
        {loading ? "Sending..." : "Send Prompt"}
      </Button>
      {error && <p>Error: {(error as AxiosError).message}</p>}
      {realEstateData.length > 0 && <RealEstateTable data={realEstateData} />}
    </Paper>
  );
};

export default ChatBox;
