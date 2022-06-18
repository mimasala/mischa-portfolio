import { IconButton, Tooltip } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

const ViewOnGithubButton = () => {
  return (
    <div>
      <Tooltip title="view on GitHub">
        <IconButton>
          <GitHubIcon color="primary"/>
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default ViewOnGithubButton;
