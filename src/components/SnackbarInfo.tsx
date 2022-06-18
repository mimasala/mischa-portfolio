import { Snackbar } from "@mui/material";
import React from "react";

interface props{
    open: boolean;
    handleClose: (event: React.SyntheticEvent | Event, reason?: string) => void;
    children: any;
}

const SnackbarInfo = ({open, handleClose, children}:props) => {
  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        {children}
      </Snackbar>
    </div>
  );
};

export default SnackbarInfo;
