import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export const HomePage = () => {
  const navigate = useNavigate();
  const navigateToUserList = () => {
    navigate("/users");
  };

  return (
    <Button
      sx={{ marginTop: "20%", marginLeft:"45%"}}
      size="large"
      color="success"
      variant="contained"
      
      onClick={navigateToUserList}
    >
      users list
    </Button>
  );
};
