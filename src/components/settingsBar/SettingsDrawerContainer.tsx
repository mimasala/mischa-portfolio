import { Drawer } from "@mui/material";
import React, { useState } from "react";
import SettingsContent from "./SettingsContent";

interface props {
  isOpen: boolean;
  handleToggleSettings: () => void;
}

const SettingsDrawerContainer = ({ isOpen, handleToggleSettings }: props) => {
  return (
    <>
      <Drawer
        variant="temporary"
        anchor="right"
        open={isOpen}
        onClose={handleToggleSettings}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <SettingsContent />
      </Drawer>
    </>
  );
};

export default SettingsDrawerContainer;
