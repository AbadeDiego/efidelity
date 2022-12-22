import React, { useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";

function Notification({ message }) {
  console.log(message)
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(message.message && message.message != "");
  }, [message]);

  const handleMessageClose = () => {
    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={2000} onClose={handleMessageClose}>
      <Alert
        sx={{ width: "100%" }}
        onClose={handleMessageClose}
        severity={message.type}
      >
        {message.message}
      </Alert>
    </Snackbar>
  );
}

export default Notification;
